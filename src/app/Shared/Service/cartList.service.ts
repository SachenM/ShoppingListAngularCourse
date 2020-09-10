import { cart } from '../../cart-panel/cart.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class cartList {
    private cartItemsList:cart[]=[]; 

    cartUpdated = new Subject<cart[]>();

    getCartList(){
        return this.cartItemsList.slice();
    }

    addToCart(cart:cart){
        console.log('oncartSelected - AppComponent' + cart.amount)
        this.cartItemsList.push(cart);
        this.cartUpdated.next(this.cartItemsList)
    }

}