import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    console.log('servicio pagina lista')

    this.http.get('/assets/data/data-pages.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp)
      })
   }
}
