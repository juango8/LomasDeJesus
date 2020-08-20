import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public idDesdeHome:number;
  constructor() { }
  setNewsId(cantidad:number){
    this.idDesdeHome = cantidad;
  }

  getNewsId(){
    return this.idDesdeHome;
  }
}
