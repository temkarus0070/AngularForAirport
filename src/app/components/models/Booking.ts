import {Ticket} from "./Ticket";

export interface Booking{
  book_ref:String;
  book_date:Date;
  total_amount:number;
  tickets:Array<Ticket>;
}
