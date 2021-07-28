import {TicketFlight} from "./TicketFlight";

export interface BoardingPass{
  ticket_no:string;
  flight_id:number;
  boarding_no:number;
  seat_no:number;
  ticketFlight:TicketFlight;
}
