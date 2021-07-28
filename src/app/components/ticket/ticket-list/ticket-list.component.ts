import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Ticket} from "../../models/Ticket";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  minIndex:number=0;
  tickets:Array<Ticket> =[]

  constructor(private routerHandler:ActivatedRoute) {
    this.routerHandler.params.subscribe((params:Params)=>{
      this.tickets=this.routerHandler.snapshot.data.tickets;
      this.minIndex=Number(params.minIndex);
    });


  }

  ngOnInit(): void {

  }

}
