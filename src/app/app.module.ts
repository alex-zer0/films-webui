import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { FilmsModule } from './films/films.module';
import { FilmModule } from './film/film.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
    MaterialModule,
    FilmsModule,
    FilmModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
