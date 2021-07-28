import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AircraftCreateComponent } from './components/aircraft/aircraft-create/aircraft-create.component';
import { ShowAircraftComponent } from './components/aircraft/show-aircraft/show-aircraft.component';
import { AircraftListComponent } from './components/aircraft/aircraft-list/aircraft-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AircraftService} from "./services/aircraft.service";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./Routes";
import { HomePageComponent } from './components/home-page/home-page.component';
import { TicketComponent } from './components/ticket/ticket/ticket.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './components/ticket/ticket-create/ticket-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftCreateComponent,
    ShowAircraftComponent,
    AircraftListComponent,
    HomePageComponent,
    TicketComponent,
    TicketListComponent,
    TicketCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const URL="http://localhost:8080/workWithBigDB-1.0-SNAPSHOT/api";
