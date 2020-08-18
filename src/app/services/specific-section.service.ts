import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecificSectionService {

  constructor(private http: HttpClient) {
  }

  getSpecificSection(id: string) {
    console.log('http://54.160.110.125:8000/api/news/list/by_category/' + id);
    return this.http.get('http://54.160.110.125:8000/api/news/list/by_category/' + id);
  }
}
