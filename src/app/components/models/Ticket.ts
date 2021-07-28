import {Booking} from "./Booking";
import {TicketFlight} from "./TicketFlight";

export interface Ticket{
  ticket_no:string;
  booking:Booking;
  ticketFlights:Array<TicketFlight>;
  passenger_id:string;
  passenger_name:string;
  contact_data:string;
}
