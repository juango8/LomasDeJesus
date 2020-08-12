import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
    // console.log('working');
  }

  getImages() {
    return this.http.get('http://54.160.110.125:8000/api/galleries/list/images');
  }
}
