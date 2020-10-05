import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { product } from '../Model/product.model';
import { ProductService } from '../../products-panel/products.service'

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<product[]> {

    constructor(private prodSer: ProductService) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const p = this.prodSer.getProductList();
        if (p.length === 0) {
            return this.prodSer.setProductsFromDBWOSub();
        } else {
            console.log('Length > 1')
            return p;
        }

    }
}