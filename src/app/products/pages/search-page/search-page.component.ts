import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormControl } from '@angular/forms';
import { Product } from '../../interfaces/products.interfaces';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent  implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  public searchInput = new FormControl('');
  public products: Product[] = [];
  public loading: boolean = false;
  public pageSizeOptions: number[] = [6, 12, 24, 96];
  public pageSize: number = 12;
  public pageIndex: number = 0;
  public totalItems: number = 0;


  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.searchProductsDefault().subscribe((productos) => {
      this.products = productos;
      this.totalItems = this.products.length;
      this.loading = false;
    });
  }
  // searchProduct() {
  //   const value: string = this.searchInput.value || '';
  //   this.loading = true;
  //   this.productosService.getSuggestions(value).subscribe((response) => {
  //     this.products = response;
  //     console.log(this.products);
  //     this.loading = false;
  //   });
  // }
  loadProducts(): void {
    this.loading = true;
    const value: string = this.searchInput.value || '';
    this.productosService.getSuggestions(value).subscribe((response) => {
      this.products = response;
      this.totalItems = this.products.length;
      this.loading = false;
    });

  }
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }


}
