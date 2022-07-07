import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from 'src/app/enum/genre';
import { Agent } from 'src/app/model/agent';
import { Band } from 'src/app/model/band';
import { Booking } from 'src/app/model/booking';
import { FullName } from 'src/app/model/full-name';

@Component({
  selector: 'app-booking-band-card',
  templateUrl: './booking-band-card.component.html',
  styleUrls: ['./booking-band-card.component.css']
})
export class BookingBandCardComponent implements OnInit {
  @Input() 
  booking: Booking;
  
  
  constructor() { 
    this.booking = new Booking( new Date(), 0);
  }

  ngOnInit(): void {
  }

 
}
