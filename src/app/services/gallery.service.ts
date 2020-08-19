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
    return this.http.get('https://admin.lomasdejesus.com/galleries/list/images');
  }
}
