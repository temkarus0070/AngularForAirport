import {Routes} from "@angular/router";
import {AircraftListResolver} from "./resolvers/AircraftListResolver";
import {AircraftListComponent} from "./components/aircraft/aircraft-list/aircraft-list.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {TicketListComponent} from "./components/ticket/ticket-list/ticket-list.component";
import {TicketListResolver} from "./resolvers/TicketListResolver";

export const ROUTES:Routes=[
  {path:'',pathMatch:"full",component:HomePageComponent},
  {path:'aircraft/:minIndex',resolve:{aircrafts:AircraftListResolver},component:AircraftListComponent},
  {path:'ticket/:minIndex',resolve:{tickets:TicketListResolver},component:TicketListComponent}

]
