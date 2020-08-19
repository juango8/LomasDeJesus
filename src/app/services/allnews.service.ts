import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllnewsService {

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get('http://54.160.110.125:8000/api/news/list/');
  }
}
