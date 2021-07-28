import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Aircraft} from "../components/models/Aircraft";
import {Observable} from "rxjs";
import {AircraftService} from "../services/aircraft.service";
import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn:"root"
  }
)

export class AircraftListResolver implements Resolve<Array<Aircraft>>{
  constructor(private aircraftService:AircraftService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Aircraft>> | Promise<Array<Aircraft>> | Array<Aircraft> {
    let minIndex:number=Number(route.paramMap.get("minIndex")) || 0;
    return this.aircraftService.load(minIndex);
  }

}
