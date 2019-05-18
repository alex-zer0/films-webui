import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmComponent } from './film.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FilmComponent
  ],
  exports: [
    FilmComponent
  ]
})
export class FilmModule { }
