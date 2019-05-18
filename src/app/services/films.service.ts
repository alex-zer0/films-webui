import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Film {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface FilmError {
  Error: string;
  Response: string;
}

const CACHE: {[key: string]: Film} = {};

@Injectable()
export class FilmsService {
  private api = 'http://www.omdbapi.com?apikey=BanMePlz';

  constructor(private http: HttpClient) { }

  searchByTitle(search?: string): Observable<Film[]> {
    if (!search) {
      return of([]);
    }
    return this.http.get<{Search: Film[]}>(`${this.api}&s=${search}`)
      .pipe(
        map(res => res.Search)
      );
  }

  fetchById(id: string): Observable<Film|FilmError> {
    if (CACHE[id]) {
      return of(CACHE[id]);
    }
    return this.http.get<Film>(`${this.api}&i=${id}`)
      .pipe(
        map(film => CACHE[id] = film)
      );
  }
}
