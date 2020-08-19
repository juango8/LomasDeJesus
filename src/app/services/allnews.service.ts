import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllnewsService {

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get('https://admin.lomasdejesus.com/news/list/');
  }
}
