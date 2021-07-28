import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../models/Ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input("ticket")ticket:Ticket={
    ticket_no:"",
    ticketFlights:[],
    contact_data:""
    ,passenger_name:"",
    passenger_id:"",
    booking:{book_ref:"",book_date:new Date(), tickets:[],total_amount:0}
  };
  constructor() { }

  ngOnInit(): void {
  }

}
