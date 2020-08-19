import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecificSectionService {

  constructor(private http: HttpClient) {
  }

  getSpecificSection(id: string) {
    console.log('https://admin.lomasdejesus.com/news/list/by_category/' + id);
    return this.http.get('https://admin.lomasdejesus.com/news/list/by_category/' + id);
  }
}
