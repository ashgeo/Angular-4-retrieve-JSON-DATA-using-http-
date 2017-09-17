import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {routes } from './app.router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './components/players/players.component';
import {PlayerService} from './services/player/player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule, HttpModule, routes
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
