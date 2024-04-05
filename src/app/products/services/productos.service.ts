import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {   GetProductsSearch, Product } from '../interfaces/products.interfaces';
import {enviroments } from 'src/enviroments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private baseURL: string = enviroments.baseUrl;
  private searchURL: string = enviroments.search_url;

  constructor(private http: HttpClient) {}
  //produccion
  searchProductsDefault(): Observable<Product[]> {
    const params = new HttpParams()
      .set('action', 'process')
      .set('page_size', '18')
      .set('json', 'true');

    return this.http.get<GetProductsSearch>(`${this.searchURL}`, { params }).pipe(
      map((response) => {
        return response.products;
      })
    );
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.http.get<{ product: Product }>(`${this.baseURL}/products/${id}`)
      .pipe(
        map(response => response.product),
        catchError(err => of(undefined))
      );
  }
  getSuggestions(query:string):Observable<Product[]>{
    console.log(query);

    const params = new HttpParams()
    .set('search_simple', '1')
    .set('action', 'process')
    .set('json', '1')
    .set('page_size', '100');
    return this.http.get<GetProductsSearch>(`${this.searchURL}?search_terms=${query}`,{params})
    .pipe(
      map((response) => {
        return response.products;
      })
    )
    ;
  }
}
