import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FilmsService, Film, FilmError } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit {
  film$: Observable<Film|FilmError>;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.film$ = this.route.params
      .pipe(
        switchMap(params => this.filmsService.fetchById(params.id))
      );
  }
}
