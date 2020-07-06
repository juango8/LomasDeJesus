import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  texto1 = `SECCIÓN`;
  texto2 = `NOTICIAS`;
  texto3 = `COMPROMISO, LEALTAD Y`;
  texto4 = `AMISTAD`;

  constructor() { }

  ngOnInit(): void {
  }

}
