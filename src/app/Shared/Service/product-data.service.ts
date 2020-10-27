import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../Model/product.model';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  saveDefaultProducts() {
    const products: product[] = [
      new product(0, 'Book', 'Stationery', 75.50, 'long size',
        'https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg',
        [{ name: 'cover', Quantity: 2 }, { name: 'page', Quantity: 126 }]),
      new product(1, 'Pen', 'Stationery', 25.00, 'Black Ink',
        'https://n4.sdlcdn.com/imgs/a/9/5/Nataraj-Black-Ink-Ball-Pen-SDL289708845-1-0bb3f.jpg',
        [{ name: 'Cap', Quantity: 1 }, { name: 'Refil', Quantity: 2 }])
    ];


    this.http.put('https://shoppinglist-64141.firebaseio.com/products.json', products).subscribe()

  }

  getProduct(index: number) {
    //const produ : product;
    this.http.get('https://shoppinglist-64141.firebaseio.com/products/0.json').subscribe(p => {
      console.log(p)
    })
  }

  fetchProducts() {
    return this.http.get<product[]>('https://shoppinglist-64141.firebaseio.com/products.json')
      .pipe(map(products => { 
        console.log('fetchProducts');   
        console.log(products)     
        console.log(products.map(prod => { return { ...prod}}));
        
        return products.map(prod => {
          return { ...prod, components: prod.components ? prod.components : [] }
        })
      }))

  }

  updateproduct(prod: product, index: number) {
    return this.http.put('https://shoppinglist-64141.firebaseio.com/products/' + index + '.json', prod)
  }


}
