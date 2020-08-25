
import { product } from '../Shared/Model/product.model';
import { EventEmitter } from '@angular/core';

export class ProductService{
    private products : product[] = [
        new product(1,'Book','Stationery',75.50,'long size','https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg'),
        new product(2,'Pen','Stationery',25.00,'Black Ink','https://n4.sdlcdn.com/imgs/a/9/5/Nataraj-Black-Ink-Ball-Pen-SDL289708845-1-0bb3f.jpg')
      ];
    
    prodductSelected = new EventEmitter<product>();

     getProductList(){
         return this.products.slice()
     } 


     addProduct(product : product){
         this.products.push(product)
     }
}