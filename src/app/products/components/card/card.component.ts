import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'productos-producto-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponentent implements OnInit {


  @Input()
  public producto!: Product;
  ngOnInit(): void {
   if(!this.producto) throw Error('Product property is required')
  }

  formatCategories(categories: string[]): string {
    const formattedCategories = categories.slice(0, 3).map(category => {
      // Reemplaza "en:" por una cadena vacía para limpiar la etiqueta
      return category.replace('en:', '');
    });
    return formattedCategories.join(', ');
  }


}
