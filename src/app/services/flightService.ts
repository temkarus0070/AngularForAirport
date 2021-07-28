import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../components/models/Flight";
import any = jasmine.any;

@Injectable({
  providedIn:"root"
})

export class FlightService{
  constructor(private httpClient:HttpClient) {
  }

  load(minIndex:number=0):Observable<Array<Flight>>{
    return this.httpClient.get<Array<Flight>>(URL+"/flight/get",{params:{minIndex:minIndex}});
  }

  get(flight_id:number):Observable<Flight>{
    return this.httpClient.get<Flight>(URL+"/flight/getFlight",{params:{flight_id:flight_id}});
  }

  remove(flight_id:number){
    this.httpClient.delete(URL+"/flight/remove",{params:{flight_id:flight_id}}).subscribe(answer=>console.log(answer));
  }

  update(flight:Flight){
    this.httpClient.patch(URL+"/flight/update",flight).subscribe(answer=>console.log(answer));
  }
}
