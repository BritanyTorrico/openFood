import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
    `
      .text-left {
        text-align: left !important;
      }
    `,
  ],
})
export class ListPageComponent implements OnInit {
  public productos: Product[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.searchProductsDefault().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
