import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/enum/genre';
import { Band } from 'src/app/model/band';
import { FullName } from 'src/app/model/full-name';
import { BandService } from 'src/app/service/band.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {

  bandsList: Band[] = [];

  constructor(private bandService: BandService) { }

  ngOnInit(): void {
    this.bandsList = [];
  this.bandService.getBands().subscribe(
    response =>{
      response.forEach((band) => {
      const firstName: string = band.fullName.firstName;
      const lastName: string = band.fullName.lastName;
      const email: string = band.email;
      const username:string = band.username;
      const password: string = band.password;
      const picture: string = band.picture;
      const dni: string = band.dni;
      const phone: number = band.phone;
      const genre: Genre = band.genre;
      const nameOfGroup: string = band.nameOfGroup;
      const priceHour: number = band.priceHour;


      const band1: Band = new Band(new FullName(firstName, lastName), email, username, password, picture, dni, phone, genre, nameOfGroup, priceHour);
     console.log(band1)
      this.bandsList.push(band1)
    });
  });
  }

}
