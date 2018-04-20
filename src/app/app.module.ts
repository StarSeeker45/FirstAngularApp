import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/jokelist.component';
import { JokeFormComponent } from './joke-form/joke-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent,
    JokeFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
