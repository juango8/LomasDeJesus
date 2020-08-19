import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastThreeService {

  constructor(private http: HttpClient) {
  }

  getLastThree() {
    return this.http.get('https://admin.lomasdejesus.com/news/last_three/');
  }
}
