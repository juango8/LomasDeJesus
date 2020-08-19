import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  constructor(private http: HttpClient) {
  }

  getOpinions() {
    return this.http.get('https://admin.lomasdejesus.com/partners/opinions/');
  }
}


