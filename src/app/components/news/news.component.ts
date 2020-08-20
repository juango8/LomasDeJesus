import { Component, OnInit } from '@angular/core';
import {OpinionsService} from '../../services/opinions.service';
import {LastThreeService} from '../../services/last-three.service';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  texto1 = `SECCIÓN`;
  texto2 = `NOTICIAS`;
  texto3 = `COMPROMISO, LEALTAD Y`;
  texto4 = `AMISTAD`;
  lastNews: any[] = [];
  baseRoot = 'https://admin.lomasdejesus.com';

  constructor(private news: LastThreeService,
              private _newsService: NewsService,
              private router:Router) {
    this.news.getLastThree()
      .subscribe((data: any) => {
        this.lastNews = data;
        // console.log(this.lastNews);
        console.log(this.lastNews[1].texto.length);
      });
  }

  maxLenght(x, index){
    // const index = 218;
    if (x.length > index) {
      return x.substring(0, index) + ' ...';
    }
    else {
      return x;
    }
  }

  goAboxNews(){
    this._newsService.setNewsId(this.lastNews[0].id);
    this.router.navigateByUrl('/portal-de-noticias');
  }

  goCboxNews(){
    this._newsService.setNewsId(this.lastNews[1].id);
    this.router.navigateByUrl('/portal-de-noticias');
  }

  goDboxNews(){
    this._newsService.setNewsId(this.lastNews[2].id);
    this.router.navigateByUrl('/portal-de-noticias');
  }

}
