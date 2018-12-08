import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data-service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-dashboard/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/hero-dashboard/heroes/heroes.component';
import { HeroService } from './service/hero-service/hero.service';
import { DashboardComponent } from "./components/hero-dashboard/dashboard/dashboard.component";

import { AppRoutingModule } from './app-routing';
import { HeroSearchComponent } from "./components/hero-dashboard/hero-search/hero-search.component";
import { MessagesComponent } from "./components/hero-dashboard/messages/messages.component";
import { MessageService } from './service/message-service/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MessagesComponent
    ],
  providers: [
    HeroService, MessageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
