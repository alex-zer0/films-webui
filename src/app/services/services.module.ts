import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsService } from './films.service';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
    FilmsService
  ]
})
export class ServicesModule { }
