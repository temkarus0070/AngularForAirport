import {Flight} from "./Flight";

export interface Airport{
  airport_code:String;
  airport_name:String;
  city:String;
  coordinates:DOMPoint;
  timezone:string;
  departureFlights:Array<Flight>;
  arrivalFlights:Array<Flight>;
}
