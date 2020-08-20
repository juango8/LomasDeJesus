import {Component, OnInit} from '@angular/core';
import {SectionsService} from '../../services/sections.service';
import { NewsService } from '../../services/news.service';
import {AllnewsService} from '../../services/allnews.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-portal-de-noticias',
  templateUrl: './portal-de-noticias.component.html',
  styleUrls: ['./portal-de-noticias.component.css']
})
export class PortalDeNoticiasComponent {

  sections: Section[] = [];
  news: any[] = [];
  statePanel = true;
  detail: Detail;
  baseRoot = 'https://admin.lomasdejesus.com';
  title: string;
  date: string;  
  texto: string;
  urlImageWide: string;
  urlImageMedium: string;
  searchBar = '';
  month = '';
  year = '';
  public idDesdeHome:number;

  constructor(private section: SectionsService, 
              private mnew: AllnewsService, 
              private _newsService: NewsService,
              private http: HttpClient) {

    
    this.idDesdeHome = this._newsService.getNewsId();
    if(this.idDesdeHome!=null){
      this.getDetail(this.idDesdeHome);
    }
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
    this.http.get('https://admin.lomasdejesus.com/news/list/by_category/' + value).subscribe(
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

  getCategories(){
    const a: any[] = [];
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].status === true) {
        a.push(this.sections[i].id);
      }
    }
    console.log(a);
    return a;
  }

  filtering() {
    this.statePanel = true;
    this.http.post<any>('https://admin.lomasdejesus.com/news/filter/', {
      text: this.searchBar,
      year: this.year,
      month: this.month,
      categories: this.getCategories()
    })
      .subscribe(data => {
        console.log(data);
        this.news = data;
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

interface Section {
  id: number;
  name: string;
  status: boolean;
}
