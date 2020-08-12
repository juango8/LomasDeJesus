import {AfterViewInit, Component} from '@angular/core';
import {GalleryService} from '../../../services/gallery.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements AfterViewInit{

  socialImages: any[] = [];
  baseRoot = 'http://54.160.110.125:8000/api';

  constructor(private images: GalleryService) {
    this.images.getImages()
      .subscribe( (data: any) => {
        // console.log(data);
        this.socialImages = data.galleries[2].images;
      });
  }

  ngAfterViewInit(){

  }

}
