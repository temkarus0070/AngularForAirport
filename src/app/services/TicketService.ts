import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../components/models/Ticket";
import {URL} from "../app.module";
@Injectable({
  providedIn:"root"
})

export class TicketService{
  constructor(private httpClient:HttpClient) {
  }

  load(minIndex:number):Observable<Array<Ticket>>{
    let httpParams:HttpParams=new HttpParams();
    httpParams.set("minIndex",minIndex);
    return this.httpClient.get<Array<Ticket>>(URL+"/ticket/get",{params:{minIndex:minIndex}});
  }

  get(ticket_no:string):Observable<Ticket>{
    return this.httpClient.get<Ticket>(URL+"/ticket/getTicket",{params:{ticket_no:ticket_no}});
  }

  remove(ticket_no:string){
    this.httpClient.delete(URL+"/ticket/remove",{params:{ticket_no:ticket_no}}).subscribe(answer=>console.log(answer));
  }

  update(ticket:Ticket){
    this.httpClient.patch(URL+"/ticket/update",ticket).subscribe(answer=>console.log(answer));
  }
}
