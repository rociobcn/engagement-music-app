import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instrument } from 'src/app/enum/instrument';
import { FullName } from 'src/app/model/full-name';
import { Member } from 'src/app/model/member';
import { AuthService } from 'src/app/service/auth.service';
import { BandService } from 'src/app/service/band.service';

@Component({
  selector: 'app-members-add',
  templateUrl: './members-add.component.html',
  styleUrls: ['./members-add.component.css'],
  host: { 'class' : 'card'}
})
export class MembersAddComponent implements OnInit {

  form: FormGroup; 
  firstNameField: FormControl;
  lastNameField: FormControl;
  instrumentField: FormControl;
  instrument = Object.keys(Instrument).filter((key) => isNaN(Number(key)));
  singleField: FormControl;
  
  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService, private bandService: BandService) { 

    this.lastNameField = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.firstNameField = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.instrumentField = new FormControl('', [Validators.required]);
    this.singleField = new FormControl('', [Validators.required]);
    

    this.form = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      instrument: this.instrumentField,
      single: this.singleField
    });
  }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn && !this.authService.isbandLoggedIn){
      this.router.navigate(['/signin']);
    }else{
   
       if(localStorage.getItem('role') !== 'BAND'){
        this.router.navigate(['/agentgen']);
       } 
     }
  }

  onSubmit() {
    const firstName: string = this.form.value.firstName;
    const lastName: string = this.form.value.lastName;
    const instrument: Instrument = this.form.value.instrument;
    const single: boolean = this.form.value.single;
    

    const member1: Member = new Member(new FullName(firstName, lastName), instrument,single);

 
      this.bandService.postMember(member1).subscribe(
        (response) => {
          alert("Member added successfully");
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

}
