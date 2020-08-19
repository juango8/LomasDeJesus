import { Component } from '@angular/core';
import {SectionsService} from '../../../../services/sections.service';
import {SpecificSectionService} from '../../../../services/specific-section.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent {

  sections: any[] = [];
  specificSection: any[];


  constructor(private section: SectionsService) {
    this.section.getSections()
      .subscribe((data: any) => {
        this.sections = data;
        console.log(this.sections);
      });
  }

  onClickMe(sect: any) {
    let id: string;
    id = sect;
    let sectio: SpecificSectionService;
    this.specificSection = [];
    sectio.getSpecificSection(id)
      .subscribe((data: any) => {
        this.sections = data;
        console.log(this.sections);
      });
  }
}
