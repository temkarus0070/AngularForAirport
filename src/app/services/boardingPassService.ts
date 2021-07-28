import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BoardingPass} from "../components/models/BoardingPass";
import any = jasmine.any;

@Injectable({
  providedIn:"root"
})
export class BoardingPassService{
  constructor(private httpClient:HttpClient) {
  }

  load(minIndex:number=0):Observable<Array<BoardingPass>>{
    return this.httpClient.get<Array<BoardingPass>>(URL+"/boardingPass/get",{params:{minIndex:minIndex}});
  }

  get(ticket_no:string,flight_id:number):Observable<BoardingPass>{
    return  this.httpClient.get<BoardingPass>(URL+"/boardingPass/getBoardingPass",{params:{ticket_no:ticket_no,flight_id:flight_id}});
  }

  remove(ticket_no:string,flight_id:number){
    this.httpClient.delete(URL+"/boardingPass/remove",{params:{ticket_no:ticket_no,flight_id:flight_id}}).subscribe(answer=>console.log(answer));
  }

  update(boardingPass:BoardingPass){
    this.httpClient.patch(URL+"/boardingPass/update",boardingPass).subscribe(answer=>console.log(answer));
  }
}
