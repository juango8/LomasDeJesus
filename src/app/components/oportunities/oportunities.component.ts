import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.css']
})
export class OportunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPDF(){
    window.open('../../../assets/pdf/LOMAS-DE-JESÚS-HISTÓRICA-Y-VIGENTE-PROPIEDAD-PRIVADA.pdf');
  }

}
