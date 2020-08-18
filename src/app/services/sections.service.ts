import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) {
  }

  getSections() {
    return this.http.get('http://54.160.110.125:8000/api/news/categories/');
  }
}
