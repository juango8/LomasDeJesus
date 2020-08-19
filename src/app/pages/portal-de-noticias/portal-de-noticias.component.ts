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
  baseRoot = 'http://54.160.110.125:8000/api';

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
      this.http.get('http://54.160.110.125:8000/api/news/list/by_category/' + value).subscribe(
        (response: any) => {
          this.news = response;
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
