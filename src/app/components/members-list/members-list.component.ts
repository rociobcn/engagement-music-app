import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  memberList: Member[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
