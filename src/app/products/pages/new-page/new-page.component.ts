import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {

  public brands = [
    { id: 'Snack Factory', desc: 'Snack - Factory' },
    { id: 'Chef Essentials', desc: 'Chef - Essentials' },
    { id: 'Grand Badon', desc: 'Grand -  Badon' },
  ];

  brandControl = new FormControl();


  constructor() {

  }

  compareBrands(brand1: any, brand2: any) {
    return brand1 && brand2 ? brand1.id === brand2.id : brand1 === brand2;
  }

  private _filterBrands(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.brands.filter(brand => brand.desc.toLowerCase().includes(filterValue));
  }
}
