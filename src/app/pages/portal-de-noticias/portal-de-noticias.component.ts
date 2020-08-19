import {Component, OnInit} from '@angular/core';
import {SectionsService} from '../../services/sections.service';
import {AllnewsService} from '../../services/allnews.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-portal-de-noticias',
  templateUrl: './portal-de-noticias.component.html',
  styleUrls: ['./portal-de-noticias.component.css']
})
export class PortalDeNoticiasComponent {

  sections: any[] = [];
  news: any[] = [];
  statePanel = true;
  detail: Detail;
  baseRoot = 'http://54.160.110.125:8000/api';
  title: string;
  date: string;
  texto: string;
  urlImageWide: string;
  urlImageMedium: string;

  constructor(private section: SectionsService, private mnew: AllnewsService, private http: HttpClient) {
    this.section.getSections()
      .subscribe((data: any) => {
        this.sections = data;
        console.log(this.sections);
      });
    this.mnew.getNews()
      .subscribe((data: any) => {
        this.news = data;
        console.log(this.sections);
      });

  }

  getSectionId(value: any) {
    this.statePanel = true;
    this.http.get('http://54.160.110.125:8000/api/news/list/by_category/' + value).subscribe(
      (response: any) => {
        this.news = response;
      });
  }

  getDetail(value: any) {
    this.statePanel = false;
    this.http.get(this.baseRoot + '/news/detail/' + value).subscribe(
      (response: any) => {
        this.detail = response;
        this.title = this.detail.title;
        this.date = this.detail.date;
        this.texto = this.detail.texto;
        this.urlImageWide = this.baseRoot + this.detail.urlImage_wide;
        this.urlImageMedium = this.baseRoot + this.detail.urlImage_medium;
      });
  }

  maxLenght(x) {
    const index = 50;
    if (x.length > index) {
      return x.substring(0, index) + ' ...';
    } else {
      return x;
    }
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
