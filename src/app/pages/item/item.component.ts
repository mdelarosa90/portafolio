import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';
import { ProductDescription } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  product: ProductDescription;
  id: string = '';
  constructor( private route: ActivatedRoute,
  public productService: ProductosService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.productService.getProductoById(this.id).subscribe((data: ProductDescription) => {
      this.product = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
