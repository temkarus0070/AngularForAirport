import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../components/models/Booking";

@Injectable({
  providedIn:"root"
})

export class BookingService{
  constructor(private httpClient:HttpClient) {
  }

  load(minIndex:number=0):Observable<Array<Booking>>{
    return this.httpClient.get<Array<Booking>>(URL+"/booking/get",{params:{minIndex:minIndex}});
  }

  get(book_ref:string):Observable<Booking>{
    return this.httpClient.get<Booking>(URL+"/booking/getBooking",{params:{book_ref:book_ref}});
  }

  remove(book_ref:string){
    this.httpClient.delete(URL+"/booking/remove",{params:{book_ref:book_ref}}).subscribe(answer=>console.log(answer));
  }

  update(booking:Booking){
    this.httpClient.patch(URL+"/booking/update",booking).subscribe(answer=>console.log(answer));
  }
}
