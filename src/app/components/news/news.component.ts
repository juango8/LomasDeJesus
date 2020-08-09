import { Component, OnInit } from '@angular/core';
import {OpinionsService} from '../../services/opinions.service';
import {LastThreeService} from '../../services/last-three.service';

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
  baseRoot = 'http://54.160.110.125:8000/api';

  constructor(private news: LastThreeService) {
    this.news.getLastThree()
      .subscribe((data: any) => {
        this.lastNews = data;
        console.log('test');
        console.log(this.lastNews);
      });
  }

}
