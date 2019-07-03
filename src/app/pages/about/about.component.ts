import { Component, OnInit } from '@angular/core';
import { InfoEquipo } from '../../interfaces/info-equipo.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: InfoEquipo[] = [];
  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
    
  }

}
