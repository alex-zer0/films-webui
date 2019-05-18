import { Injectable } from '@angular/core';
import { Film } from './films.service';

const STORAGE_KEY = 'films-webui:list';

@Injectable()
export class StorageService {
  fetchFilms(): Film[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  storeFilms(films: Film[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(films));
  }
}
