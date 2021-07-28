import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Ticket} from "../components/models/Ticket";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TicketService} from "../services/TicketService";

@Injectable({
  providedIn:"root"
})
export class TicketListResolver implements Resolve<Array<Ticket>>{
  constructor(private ticketService:TicketService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Ticket>> | Promise<Array<Ticket>> | Array<Ticket> {
    let minIndex:number=Number(route.paramMap.get("minIndex"));
    return this.ticketService.load(minIndex);
  }

}
