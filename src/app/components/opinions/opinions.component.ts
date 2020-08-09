import { Component } from '@angular/core';
import {OpinionsService} from '../../services/opinions.service';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {

  opinions: any[] = [];
  baseRoot = 'http://54.160.110.125:8000/api';

  constructor(private opinion: OpinionsService) {
    this.opinion.getOpinions()
      .subscribe((data: any) => {
        this.opinions = data;
        // console.log(this.opinions);
      });
  }

}
