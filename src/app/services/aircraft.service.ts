import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aircraft} from "../components/models/Aircraft";
import {URL} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private httpClient:HttpClient) { }

  load(minIndex:number=0):Observable<Array<Aircraft>>{
      return  this.httpClient.get<Array<Aircraft>>(URL+"/aircraft/get",{params:{minIndex:minIndex}});
  }

  get(aircraft_code:string){
    return this.httpClient.get<Aircraft>(URL+"/aircraft/getAircraft",{params:{aircraft_code:aircraft_code}});
  }

  add(aircraft:Aircraft):void{
    this.httpClient.post(URL+"/aircraft/add",aircraft).subscribe(next=>console.log(next));
  }

  update(aircraft:Aircraft):void{
    this.httpClient.post(URL+"/aircraft/update",aircraft).subscribe(next=>console.log(next));
  }

  remove(aircraft_code:string){
    this.httpClient.delete(URL+"/aircraft/remove",{params:{aircraft_code:aircraft_code}}).subscribe(answer=>console.log(answer));
  }
}
