import { Component, OnInit } from '@angular/core';
import {AircraftService} from "../../../services/aircraft.service";
import {Aircraft} from "../../models/Aircraft";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {
  aircrafts:Array<Aircraft> =[];


  constructor(private aircraftService:AircraftService,private routeHandler:ActivatedRoute) { }

  ngOnInit(): void {
this.aircrafts= this.routeHandler.snapshot.data.aircrafts;
  }

}
