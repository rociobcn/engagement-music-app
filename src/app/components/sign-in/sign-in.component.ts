import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  host: { 'class' : 'card'}
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  usernameField: FormControl;
  passwordField: FormControl;
  invalidLogin: boolean = false;

  constructor(private router: Router, private auth: AuthService) { 
    this.usernameField = new FormControl('', [Validators.required]);
   
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.form = new FormGroup({
      username: this.usernameField,
      password: this.passwordField
    });
  }

  ngOnInit(): void {
  
  }
  onSubmit() {

   this.auth.loginUser(new User(
      this.usernameField.value, this.passwordField.value)
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.auth.saveBandInfo(data);
          if(data.roles[0].role === "BAND"){  
            this.router.navigate(['/bandgen']);
          } else{
             this.router.navigate(['/agentgen']); 
          }
         
        },
        error: (data) => {
          console.log(data)
          this.invalidLogin = true;
        }
      })

}
}
