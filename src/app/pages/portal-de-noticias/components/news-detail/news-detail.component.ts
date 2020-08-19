import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  id: any;
  detail: Detail;
  private sub: any;
  private baseRoot = 'https://admin.lomasdejesus.com';
  title: string;
  date: string;
  texto: string;
  urlImageWide: string;
  urlImageMedium: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    this.http.get(this.baseRoot + '/news/detail/' + this.id).subscribe(
      (response: any) => {
        this.detail = response;
        // this.detail = JSON.stringify(response);
        // console.log('in', this.detail);
        this.title = this.detail.title;
        this.date = this.detail.date;
        this.texto = this.detail.texto;
        this.urlImageWide = this.baseRoot + this.detail.urlImage_wide;
        this.urlImageMedium = this.baseRoot + this.detail.urlImage_medium;
      });
  }
}

interface Detail {
  id: number;
  urlImage_wide: string;
  urlImage_medium: string;
  urlImage_narrow: string;
  title: string;
  texto: string;
  views: number;
  date: string;
  category: number;
}
