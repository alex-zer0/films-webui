import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../services/films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  @Input() film: Film;
  @Input() search: boolean;
  @Output() toggle = new EventEmitter<Film>();

  toggleFilm(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    this.toggle.emit(this.film);
  }
}
