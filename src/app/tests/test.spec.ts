import {AircraftService} from "../services/aircraft.service";
import {Inject} from "@angular/core";
import {inject, TestBed} from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('DataService', () => {
  let service:AircraftService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[
      HttpClientModule],
      providers: [AircraftService]
    });


  })
  service=TestBed.inject(AircraftService);
  it("",() =>{
    return service.load()});
});
