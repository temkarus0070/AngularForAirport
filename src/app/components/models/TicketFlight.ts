import {Ticket} from "./Ticket";
import {Flight} from "./Flight";

export interface TicketFlight{
  ticket_no:string;
  flight_id:number;
  ticket:Ticket;
  fare_conditions:string;
  amount:number;
  flight:Flight;
}
