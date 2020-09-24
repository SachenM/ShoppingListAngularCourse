
import { product } from '../Shared/Model/product.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ProductService{
    private products : product[] = [
        new product(0,'Book','Stationery',75.50,'long size',
        'https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg',
        [{name:'cover',Quantity:2},{name:'page',Quantity:126}]),
        new product(1,'Pen','Stationery',25.00,'Black Ink',
        'https://n4.sdlcdn.com/imgs/a/9/5/Nataraj-Black-Ink-Ball-Pen-SDL289708845-1-0bb3f.jpg',
        [{name:'Cap',Quantity:1},{name:'Refil',Quantity:2}])
      ];
    
      onProductsUpdated = new Subject<product[]>();
      private emitProductsOnUpdate(){
        this.onProductsUpdated.next(this.products)
      }

     getProductList(){
         return this.products.slice()
     } 

     getProduct(index:number){
         return this.products.slice()[index]
     }

     addProduct(product : product){
         this.products.push(product)
         console.log(this.products)
         this.emitProductsOnUpdate()
     }

     updateProduct(id:number,updatedProduct : product){
         this.products[id] = updatedProduct;
         this.emitProductsOnUpdate()
     }
}