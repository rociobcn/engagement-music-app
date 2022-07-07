import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Band } from '../model/band';
import { Agent } from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'http://localhost:8081';

  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  isbandLoggedIn: boolean = false;
  user: User = new User(" "," ");

  constructor(private http: HttpClient) {}


  registerBand(band: Band) {
   
    return this.http.post<Band>(this.rootUrl + '/add-band', band);
  }
  registerBar(agent: Agent) {
    return this.http.post<Agent>(this.rootUrl + '/add-agent', agent);
  }

  saveBandInfo(user: any) {

    localStorage.setItem('username', user['username']);
    localStorage.setItem('role', user.roles[0].role);

    this.isLoggedIn = true;
    console.log(localStorage.getItem('username'));
  }
  
  isBandLoggedIn(): boolean {
    return this.isbandLoggedIn;
  }
  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getUsername() : string {	
    return this.username;
  }

  getPassword(): string {
    return this.password;

  }

  loginUser(user: User): Observable<any> {
    this.username = user.username;
    this.password = user.password;
     var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password),
        
      })
    };

    return this.http.get(this.rootUrl + '/login',  httpOptions);

  }

  getHeaders(){
    return  {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password),
        
      })
  }
  }


  

  logout() {
    localStorage.removeItem('username');
    this.isLoggedIn = false;
  }
  restoreSession() {
    if (localStorage.getItem('username') != null) {
      this.isLoggedIn = true;
    }
  }
  
}
