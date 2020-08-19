import { Component } from '@angular/core';
import {GalleryService} from '../../../services/gallery.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent {

  natureImages: any[] = [];
  baseRoot = 'https://admin.lomasdejesus.com';

  constructor(private images: GalleryService) {
    this.images.getImages()
      .subscribe( (data: any) => {
        // console.log(data);
        this.natureImages = data.galleries[0].images;
        // console.log(this.natureImages);
      });
  }

}
