import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../enum/genre';
import { Band } from '../model/band';
import { Booking } from '../model/booking';
import { FullName } from '../model/full-name';
import { Member } from '../model/member';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class BandService {
  private readonly baseUrl = 'http://localhost:8081/';
  

  constructor(private http: HttpClient, private auth : AuthService) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.baseUrl + "all-bands");
  }
  getBand(username: string): Observable<Band> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.auth.username + ':' + this.auth.password),
        
      })
    };
    return this.http.get<Band>(this.baseUrl + "band/find-username", httpOptions);
  }
  putBand(band : Band): Observable<Band> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.auth.username.toUpperCase() + ':' + this.auth.password),
        
      })
    };
    return this.http.put<Band>(this.baseUrl + "band/update", band, httpOptions);
  }
  postMember(member : Member): Observable<Member> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.auth.username + ':' + this.auth.password),
      })
    };
    return this.http.post<Member>(this.baseUrl + "band/add-member", member, httpOptions);
  }


  getBookingList(username: string): Observable<Booking[]> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.auth.username + ':' + this.auth.password),
        
      })
    };
    return this.http.get<Booking[]>(this.baseUrl + "band/list-booking", httpOptions);
  }

  
}
