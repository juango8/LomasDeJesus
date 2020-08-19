import {AfterViewInit, Component} from '@angular/core';
import {GalleryService} from '../../../services/gallery.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements AfterViewInit{

  socialImages: any[] = [];
  baseRoot = 'https://admin.lomasdejesus.com';

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
