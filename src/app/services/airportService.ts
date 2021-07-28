import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Airport} from "../components/models/Airport";

@Injectable({
  providedIn:"root"
})
export class AirportService{
  constructor(private httpService:HttpClient) {
  }

  load(minIndex:number=0):Observable<Array<Airport>>{
    return  this.httpService.get<Array<Airport>>(URL+"/airport/get",{params:{minIndex:minIndex}});
  }

  get(airport_code:string):Observable<Airport>{
    return this.httpService.get<Airport>(URL+"/airport/getAirport",{params:{airport_code:airport_code}});
  }

  remove(airport_code:string){
    this.httpService.delete(URL+"/airport/remove",{params:{airport_code:airport_code}}).subscribe(answer=>console.log(answer));
  }

  update(airport:Airport){
    this.httpService.patch(URL+"/airport/update",airport).subscribe(answer=>console.log(answer));
  }
}
