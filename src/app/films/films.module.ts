import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmsComponent } from './films.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    FilmsComponent,
    FilmCardComponent
  ],
  exports: [
    FilmsComponent
  ]
})
export class FilmsModule { }
