import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: InfoProducto[] = []
  cargando = true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-portafolio-f7c31.firebaseio.com/productos_idx.json').subscribe((resp: InfoProducto[]) => {
      this.productos = resp;

      setTimeout(() => {
        this.cargando = false;
      }, 2000)
    })
  }

}
