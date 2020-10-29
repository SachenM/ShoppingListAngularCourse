
import { product } from '../Shared/Model/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductDataService } from '../Shared/Service/product-data.service';
import { tap } from 'rxjs/operators'

@Injectable()
export class ProductService {
    private products: product[]=[];
    // = [
    //     new product(0,'Book','Stationery',75.50,'long size',
    //     'https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg',
    //     [{name:'cover',Quantity:2},{name:'page',Quantity:126}]),
    //     new product(1,'Pen','Stationery',25.00,'Black Ink',
    //     'https://n4.sdlcdn.com/imgs/a/9/5/Nataraj-Black-Ink-Ball-Pen-SDL289708845-1-0bb3f.jpg',
    //     [{name:'Cap',Quantity:1},{name:'Refil',Quantity:2}])
    //   ];

    constructor(private psd: ProductDataService) { }



    onProductsUpdated = new Subject<product[]>();

    setProductsFromDB() {

        this.setProductsFromDBWOSub().subscribe()
        
    }

    setProductsFromDBWOSub(){
        console.log('Service getProductsFromDB')
        console.log(this.products)

        const x = this.psd.fetchProducts();

        return x.pipe(tap(p => { 
            console.log('http2 getProductsFromDB'); 
            console.log(p); 
            this.products = p 
        this.onProductsUpdated.next(this.products.slice()) }))
  
    }
    
    private emitProductsOnUpdate() {
        this.onProductsUpdated.next(this.products.slice())
    }

    getProductList() {
        // console.log('getProductList')
        // console.log(this.products)
        return this.products.slice()
    }

    getProduct(index: number) {
        return this.products.slice()[index]
    }

    addProduct(product: product) {
        this.products.push(product)
        console.log(this.products)
        this.psd.updateproduct(product,product.id).subscribe()
        this.emitProductsOnUpdate()
    }

    updateProduct(id: number, updatedProduct: product) {
        this.products[id] = updatedProduct;
        this.psd.updateproduct(updatedProduct,id).subscribe()
        this.emitProductsOnUpdate()
    }
}