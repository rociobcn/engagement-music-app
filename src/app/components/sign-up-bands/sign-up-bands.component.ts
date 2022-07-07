import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/enum/genre';
import { Band } from 'src/app/model/band';
import { FullName } from 'src/app/model/full-name';
import { AuthService } from 'src/app/service/auth.service';
import { BandService } from 'src/app/service/band.service';

@Component({
  selector: 'app-sign-up-bands',
  templateUrl: './sign-up-bands.component.html',
  styleUrls: ['./sign-up-bands.component.css'],
  host: { class: 'card' },
})
export class SignUpBandsComponent implements OnInit {
  form: FormGroup;
  firstNameField: FormControl;
  lastNameField: FormControl;
  usernameField: FormControl;
  passwordField: FormControl;
  emailField: FormControl;
  dniField: FormControl;
  phoneField: FormControl;
  pictureField: FormControl;
  nameofGroupField: FormControl;
  genreField: FormControl;
  priceHourField: FormControl;
  genre = Object.keys(Genre).filter((key) => isNaN(Number(key)));

  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.usernameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
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
      Validators.email,
    ]);
    this.dniField = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{8}[A-Z]{1}'),
    ]);
    this.phoneField = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{9}'),
    ]);
    this.pictureField = new FormControl('', []);
    this.nameofGroupField = new FormControl('', [Validators.required]);
    this.genreField = new FormControl('', [Validators.required]);
    this.priceHourField = new FormControl('', [Validators.required]);
    this.form = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      username: this.usernameField,
      password: this.passwordField,
      email: this.emailField,
      dni: this.dniField,
      phone: this.phoneField,
      picture: this.pictureField,
      nameofGroup: this.nameofGroupField,
      genre: this.genreField,
      priceHour: this.priceHourField,
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    const firstName: string = this.form.value.firstName;
    const lastName: string = this.form.value.lastName;
    const email: string = this.form.value.email;
    const username: string = this.form.value.username;
    const password: string = this.form.value.password;
    const picture: string = this.form.value.picture;
    const dni: string = this.form.value.dni;
    const phone: number = this.form.value.phone;
    const genre: Genre = this.form.value.genre;
    const nameOfGroup: string = this.form.value.nameofGroup;
    const priceHour: number = this.form.value.priceHour;

    const band1: Band = new Band(
      new FullName(firstName, lastName),
      email,
      username,
      password,
      picture,
      dni,
      phone,
      genre,
      nameOfGroup,
      priceHour
    );

    this.authService.registerBand(band1).subscribe(
      (response) => {
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
