import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { FilmsService, Film } from '../services/films.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  searchOptions$: Observable<Film[]>;
  films$: Observable<Film[]>;
  storedFilms$ = new BehaviorSubject<Film[]>(this.storage.fetchFilms());

  form: FormGroup;

  constructor(
    private filmsService: FilmsService,
    private storage: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({ search: null });
    this.searchOptions$ = this.form
      .get('search').valueChanges
      .pipe(
        debounceTime(400),
        switchMap(title => this.filmsService.searchByTitle(title))
      );

    this.films$ = this.storedFilms$.asObservable();
    this.storedFilms$
      .pipe(
        debounceTime(400)
      )
      .subscribe(films => this.storage.storeFilms(films));
  }

  addToList(film: Film) {
    const films = this.storedFilms$.getValue();
    if (!films.some(f => f.imdbID === film.imdbID)) {
      films.push(film);
    }
    this.storedFilms$.next(films);
  }

  rmFromList(film: Film) {
    const films = this.storedFilms$
      .getValue()
      .filter(f => f.imdbID !== film.imdbID);
    this.storedFilms$.next(films);
  }
}
