/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { UniversalModule } from 'angular2-universal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { PlayersComponent } from './core/components/players/players.component';
import { PlayerDetailsComponent } from './core/components/players/player-details.component';

import { AppService } from './core/services/app.service';
import { Storage } from './core/utilities/storage';


@NgModule({
  imports: [
    BrowserModule,
    UniversalModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PlayersComponent,
    PlayerDetailsComponent
  ],
  providers: [
    AppService,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


