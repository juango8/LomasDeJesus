import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) {
  }

  getSections() {
    return this.http.get('https://admin.lomasdejesus.com/news/categories/');
  }
}
