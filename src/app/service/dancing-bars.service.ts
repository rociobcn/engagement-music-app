import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DancingBar } from '../model/dancing-bar';

@Injectable({
  providedIn: 'root'
})
export class DancingBarsService {

  private readonly baseUrl = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }

  getBars(): Observable<DancingBar[]> {
    return this.http.get<DancingBar[]>(this.baseUrl + "all-bars");
  }

}
export interface DancingBarInterface {

  "name": string,
  "picture": string,
  "adress": {
    "street": string,
    "city": string,
    "country": string,
    "postalCode": number
  }
}
