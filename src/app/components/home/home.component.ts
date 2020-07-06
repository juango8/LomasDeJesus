import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo1 = `"Un paraíso aislado`;
  titulo2 = `de la ciudad"`;
  texto1 = `Es el momento para descubrir todo lo`;
  texto2 = `que Lomas de Jesús tiene para`;
  texto3 = `ofrecerte.`;

  constructor() { }

  ngOnInit(): void {
  }

}
