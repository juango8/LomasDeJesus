import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastThreeService {

  constructor(private http: HttpClient) {
  }

  getLastThree() {
    return this.http.get('http://54.160.110.125:8000/api/news/last_three/');
  }
}
