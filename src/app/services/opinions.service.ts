import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  constructor(private http: HttpClient) {
  }

  getOpinions() {
    return this.http.get('http://54.160.110.125:8000/api/partners/opinions/');
  }
}


