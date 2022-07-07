import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-band-general',
  templateUrl: './band-general.component.html',
  styleUrls: ['./band-general.component.css']
})
export class BandGeneralComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn && !this.auth.isbandLoggedIn){
      this.router.navigate(['/signin']);
    }else{
   
       if(localStorage.getItem('role') !== 'BAND'){
        this.router.navigate(['/agentgen']);
       }
     }
    
  }
  signOut(){
    this.auth.logout();
    this.router.navigate(['/signin']);
  }

}
