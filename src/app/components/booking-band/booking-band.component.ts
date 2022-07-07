import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/enum/genre';
import { Agent } from 'src/app/model/agent';
import { Band } from 'src/app/model/band';
import { Booking } from 'src/app/model/booking';
import { FullName } from 'src/app/model/full-name';
import { AuthService } from 'src/app/service/auth.service';
import { BandService } from 'src/app/service/band.service';

@Component({
  selector: 'app-booking-band',
  templateUrl: './booking-band.component.html',
  styleUrls: ['./booking-band.component.css']
})
export class BookingBandComponent implements OnInit {
  bookingList: Booking[] = [];

  constructor(private bandService: BandService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.bookingList = [];
   if(!this.authService.isLoggedIn && !this.authService.isbandLoggedIn){
      this.router.navigate(['/signin']);
    }else{
   
       if(localStorage.getItem('role') !== 'BAND'){
        this.router.navigate(['/agentgen']);
       } else{
        this.bandService.getBookingList(localStorage.getItem('username')!).subscribe(
          (response) => {
            console.log(response);
            
            
            response.forEach((booking) => {
              console.log(booking);
              /*
              const firstNameAgent: string = booking.agent.fullName.firstName;
              const lastNameAgent: string = booking.agent.fullName.lastName;
              const email: string = booking.agent.email;
              const phone: number = booking.agent.phone;
              const username: string = booking.agent.username;
              const password: string = booking.agent.password;
              const pictureAgent: string = booking.agent.picture;
              const dni: string = booking.agent.dni;
              const position: string = booking.agent.position;


              const firstNameBand: string = booking.band.fullName.firstName;
              const lastNameBand: string = booking.band.fullName.lastName;
              const nameOfGroup: string = booking.band.nameOfGroup;
              const priceHour: number = booking.band.priceHour;
              const emailBand: string = booking.band.email;
              const phoneBand: number = booking.band.phone;
              const usernameBand: string = booking.band.username;
              const passwordBand: string = booking.band.password;
              const pictureBand: string = booking.band.picture;
              const dniBand: string = booking.band.dni;
              const genre: Genre = booking.band.genre;
*/

              const date: Date = booking.date;
              const price: number = booking.priceTotal;


              const booking1: Booking = new Booking(date, price);
              console.log(booking1)

              this.bookingList.push(booking1)
          }
        );
       }
      
     )}
    }
  }


}

