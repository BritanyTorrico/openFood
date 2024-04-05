import { Component, OnInit ,ElementRef  } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Nutriments, Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit  {

  dataSource: Nutrient[] = [];
  displayedColumns: string[] = ['label', 'unit', 'value'];

  public product?:Product;
  public nutrientUnits: string[] = [];
  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private el: ElementRef

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // delay(3000),
        switchMap(({ id }) => this.productosService.getProductById(id)))
      .subscribe(product => {
        if (!product) return this.router.navigate(['/products/list']);

        this.product=product;
        console.log(this.product);
        if (this.product.nutriments) {
          this.dataSource = this.extractNutrientData(this.product.nutriments);
        }
        return;
      });
  }
  goToHealthSection() {
    const healthSection = this.el.nativeElement.querySelector('#healthSection');
    if (healthSection) {
      healthSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToNutrionalSection() {
    const nutrionalSection = this.el.nativeElement.querySelector('#nutrionalSection');
    if (nutrionalSection) {
      nutrionalSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

   formatPackagingTags(tags: string[]): string {
    return tags.map(tag => tag.replace('en:', '')).join(', ');
  }
   formatCategories(categories: string[]): string {
    const formattedCategories = categories.slice(0, 3).map(category => {
      return category.replace('en:', '');
    });
    return formattedCategories.join(', ');
  }
  private extractNutrientData(nutriments: Nutriments): Nutrient[] {
    const nutrients: Nutrient[] = [];
    const filteredKeys = Object.keys(nutriments).filter(key =>
      key.endsWith('_unit') && !key.endsWith('_prepared_unit')
    );

    // Iterar sobre las propiedades filtradas y construir el arreglo de nutrientes
    filteredKeys.forEach(key => {
      const nutrientLabel = key.replace('_unit', '');
      const nutrientUnit = nutriments[key as keyof Nutriments] as string;
      const nutrientValue = nutriments[nutrientLabel as keyof Nutriments];
      nutrients.push({ label: nutrientLabel, unit: nutrientUnit, value: nutrientValue });
    });

    return nutrients;
  }
  goBack():void{
    this.router.navigateByUrl('products/list');
  }


}
interface Nutrient {
  label: string;
  unit: string;
  value: number | string | undefined;
}
