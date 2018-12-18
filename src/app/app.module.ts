import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data-service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroService } from './service/hero-service/hero.service';
import { MessagesComponent } from './components/messages/messages.component';

import { AppRoutingModule } from './app-routing';
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
    MessagesComponent,
    ],
  providers: [
    HeroService, MessageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
