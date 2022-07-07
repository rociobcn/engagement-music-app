import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/enum/genre';
import { Band } from 'src/app/model/band';
import { FullName } from 'src/app/model/full-name';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.css']
})
export class BandsListComponent implements OnInit {
  
  @Input() 
  band: Band;

  constructor() { 
    this.band = new Band(new FullName("", ""),"","","","","",0, Genre.BLUES,"",0);
  }

  ngOnInit(): void {
  }

}
