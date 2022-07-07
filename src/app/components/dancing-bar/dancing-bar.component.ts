import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { DancingBar } from 'src/app/model/dancing-bar';
import { DancingBarsService } from 'src/app/service/dancing-bars.service';

@Component({
  selector: 'app-dancing-bar',
  templateUrl: './dancing-bar.component.html',
  styleUrls: ['./dancing-bar.component.css']
})
export class DancingBarComponent implements OnInit {
  
  dancingBarsList: DancingBar[] = [];
  
  constructor(private dancingBarService: DancingBarsService) { }

  ngOnInit(): void {
    this.dancingBarsList = [];
  this.dancingBarService.getBars().subscribe(
    response =>{
      response.forEach((bar) => {
      const picture: string = bar.picture;
      const name: string = bar.name;
      const street: string = bar.address.street;
      const city:string = bar.address.city;
      const country: string = bar.address.country;
      const postalCode: string = bar.address.postalCode;
  

      const bar1: DancingBar = new DancingBar(name, picture, new Address(street, city, country, postalCode));
      this.dancingBarsList.push(bar1)
    });
  });
  }


}
