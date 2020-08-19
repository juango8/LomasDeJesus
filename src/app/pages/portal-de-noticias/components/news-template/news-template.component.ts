import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-template',
  templateUrl: './news-template.component.html',
  styleUrls: ['./news-template.component.css']
})
export class NewsTemplateComponent {

  Date: string;
  Title: string;
  Description: string;


  constructor() { }

  maxLenght(x){
    const index = 200;
    if (x.length > index) {
      return x.substring(0, index) + ' ...';
    }
    else {
      return x;
    }
  }

}
