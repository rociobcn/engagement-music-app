import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/enum/instrument';
import { FullName } from 'src/app/model/full-name';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-members-list-card',
  templateUrl: './members-list-card.component.html',
  styleUrls: ['./members-list-card.component.css']
})
export class MembersListCardComponent implements OnInit {
  @Input() 
  member: Member;
  @Input()
  index: number = 0;
  
  
  constructor() {
    this.member = new Member(new FullName('', ''), Instrument.ACCORDION, false);
   }

  ngOnInit(): void {
  }
  delete(){

  }

}
