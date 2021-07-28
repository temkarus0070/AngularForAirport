import {Flight} from "./Flight";
import {Seat} from "./Seat";

export interface Aircraft{
  aircraft_code:string;
  model:string;
  range:number;
  flightList:Array<Flight>
  seatList:Array<Seat>
}
