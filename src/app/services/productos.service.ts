import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: InfoProducto[] = [];
  productosFiltrados: InfoProducto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-portafolio-f7c31.firebaseio.com/productos_idx.json').subscribe((resp: InfoProducto[]) => {
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
        resolve();
      })
    })
  }

  public getProductoById(id: any) {
    return this.http.get(`https://angular-portafolio-f7c31.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {

    if (this.productos.length === 0 ) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      })
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos (termino: string) {
    this.productosFiltrados = this.productos ? this.productos.filter(term => term.categoria.includes(termino)) : [];
  }

}
