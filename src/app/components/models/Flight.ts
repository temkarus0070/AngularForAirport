import {Aircraft} from "./Aircraft";
import {TicketFlight} from "./TicketFlight";
import {Airport} from "./Airport";
import {Status} from "./Status";

export interface Flight{
  flight_id:number;
  flight_no:string;
  scheduled_departure:Date;
  scheduled_arrival:Date;
  departure_airport:Airport;
  arrival_airport:Airport;
  status:Status;
  actual_departure:Date;
  actual_arrival:Date;
  ticketFlights:Array<TicketFlight>;
  aircraft:Aircraft;
}
