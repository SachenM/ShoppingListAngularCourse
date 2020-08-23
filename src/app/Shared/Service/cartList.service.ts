import { cart } from '../../cart-panel/cart.model';
import { EventEmitter } from '@angular/core';

export class cartList {
    private cartItemsList:cart[]=[]; 

    cartUpdated = new EventEmitter<cart[]>();

    getCartList(){
        return this.cartItemsList.slice();
    }

    addToCart(cart:cart){
        console.log('oncartSelected - AppComponent' + cart.amount)
        this.cartItemsList.push(cart);
        this.cartUpdated.emit(this.cartItemsList)
    }

}