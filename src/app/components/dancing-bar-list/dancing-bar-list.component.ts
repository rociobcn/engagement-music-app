import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { DancingBar } from 'src/app/model/dancing-bar';

@Component({
  selector: 'app-dancing-bar-list',
  templateUrl: './dancing-bar-list.component.html',
  styleUrls: ['./dancing-bar-list.component.css']
})
export class DancingBarListComponent implements OnInit {
  @Input() 
  dancingBar: DancingBar;
  constructor() { 
    this.dancingBar = new DancingBar("","", new Address("","","",""));
  }

  ngOnInit(): void {
  }

}
