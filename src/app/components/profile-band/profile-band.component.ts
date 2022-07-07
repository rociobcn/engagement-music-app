import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/enum/genre';
import { Band } from 'src/app/model/band';
import { FullName } from 'src/app/model/full-name';
import { AuthService } from 'src/app/service/auth.service';
import { BandService } from 'src/app/service/band.service';

@Component({
  selector: 'app-profile-band',
  templateUrl: './profile-band.component.html',
  styleUrls: ['./profile-band.component.css'],
  host: { 'class' : 'card'}
})
export class ProfileBandComponent implements OnInit {
  form: FormGroup;
  firstNameField: FormControl;
  lastNameField: FormControl;
  passwordField: FormControl;
  emailField: FormControl;
  dniField: FormControl;
  phoneField: FormControl;
  pictureField: FormControl;
  nameOfGroupField: FormControl;
  genreField: FormControl;
  priceHourField: FormControl;
  genre = Object.keys(Genre).filter((key) => isNaN(Number(key)));

  invalidLogin: boolean = false;
  band : Band = new Band(new FullName("", ""), "", "", "", "", "", 0, Genre.BLUES, "", 0);

  constructor(private router: Router, private authService: AuthService, private bandService: BandService) {
    this.passwordField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.lastNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.firstNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.dniField = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{8}[A-Za-z]{1}')
    ]);
    this.phoneField = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{9}')
    ]);
    this.pictureField = new FormControl('', []);
    this.nameOfGroupField = new FormControl('', [Validators.required]);
    this.genreField = new FormControl('', [Validators.required]);
    this.priceHourField = new FormControl('', [Validators.required]);
    this.form = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      password: this.passwordField,
      email: this.emailField,
      dni: this.dniField,
      phone: this.phoneField,
      picture: this.pictureField,
      nameOfGroup: this.nameOfGroupField,
      genre: this.genreField,
      priceHour: this.priceHourField,
    });
  }

  ngOnInit(): void {

    if(!this.authService.isLoggedIn && !this.authService.isbandLoggedIn){
      this.router.navigate(['/signin']);
    }else{
   
       if(localStorage.getItem('role') !== 'BAND'){
        this.router.navigate(['/agentgen']);
       } else{
        this.bandService.getBand(localStorage.getItem('username')!.toUpperCase()).subscribe(
          (response) => {
            this.band = response;
            console.log(this.band);
            this.form.patchValue({
              firstName: response.fullName.firstName,
              lastName: response.fullName.lastName,
              //password: response.password,
              email: response.email,
              dni: response.dni,
              phone: response.phone,
              nameOfGroup: response.nameOfGroup,
              genre: response.genre,
              priceHour: response.priceHour,
            });
            this.form.updateValueAndValidity();
          
                 }
        );
       }
     }
  }
  onSubmit() {
    let firstName: string = this.form.value.firstName;
    let lastName: string = this.form.value.lastName;
    let email: string = this.form.value.email;
    let password: string = this.form.value.password;
    let picture: string = this.form.value.picture == "" ? this.band.picture : this.form.value.picture;
    let dni: string = this.form.value.dni;
    let phone: number = this.form.value.phone;
    let genre: Genre = this.form.value.genre;
    let nameOfGroup: string = this.form.value.nameofGroup;
    let priceHour: number = this.form.value.priceHour;

    console.log(this.form.value)
  
    

    const band1: Band = new Band(new FullName(firstName, lastName), email, localStorage.getItem('username')!, password, picture, dni, phone, genre, nameOfGroup, priceHour);
   console.log(band1);

    this.bandService.putBand(band1).subscribe(
      (response) => {
        alert("Band updated");
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );

  }

}
