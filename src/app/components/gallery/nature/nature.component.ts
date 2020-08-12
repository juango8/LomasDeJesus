import { Component } from '@angular/core';
import {GalleryService} from '../../../services/gallery.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent {

  natureImages: any[] = [];
  baseRoot = 'http://54.160.110.125:8000/api';

  constructor(private images: GalleryService) {
    this.images.getImages()
      .subscribe( (data: any) => {
        // console.log(data);
        this.natureImages = data.galleries[0].images;
        // console.log(this.natureImages);
      });
  }

}
