import {Aircraft} from "./Aircraft";

export interface Seat{
  aircraft_code:string;
  seat_no:string;
  fare_conditions:string;
  aircraft:Aircraft;
}
