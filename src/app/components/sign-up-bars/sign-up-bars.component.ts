import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agent } from 'src/app/model/agent';
import { FullName } from 'src/app/model/full-name';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up-bars',
  templateUrl: './sign-up-bars.component.html',
  styleUrls: ['./sign-up-bars.component.css'],
  host: { 'class' : 'card'}
})
export class SignUpBarsComponent implements OnInit {
  form: FormGroup; 
  firstNameField: FormControl;
  lastNameField: FormControl;
  usernameField: FormControl;
  passwordField: FormControl;
  emailField: FormControl;
  dniField: FormControl;
  phoneField: FormControl;
  pictureField: FormControl;
  positionField: FormControl;
  
  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) { 
    this.usernameField = new FormControl('', [Validators.required, Validators.minLength(3)]); 
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.lastNameField = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.firstNameField = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.dniField = new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}[A-Z]{1}')]);
    this.phoneField = new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]);
    this.pictureField = new FormControl('', []);
    this.positionField = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);

    this.form = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      username: this.usernameField,
      password: this.passwordField,
      email: this.emailField,
      dni: this.dniField,
      phone: this.phoneField,
      picture: this.pictureField,
      position: this.positionField

    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const firstName: string = this.form.value.firstName;
    const lastName: string = this.form.value.lastName;
    const email: string = this.form.value.email;
    const username: string = this.form.value.username;
    const password: string = this.form.value.password;
    const picture: string = this.form.value.picture;
    const dni: string = this.form.value.dni;
    const phone: number = this.form.value.phone;
    const position: string = this.form.value.position;

    const bar1: Agent = new Agent(
      new FullName(firstName, lastName),
      email,
      username,
      password,
      picture,
      dni,
      phone,
      position
    );

    this.authService.registerBar(bar1).subscribe(
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
