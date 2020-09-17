import { cart } from '../../cart-panel/cart.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class cartList {
    EditingModeClicked = new Subject<number>();
    
    //inEditingMode = new Subject<number>();
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

    updateCart(index:number,cart:cart){
        this.cartItemsList[index]=cart;
        this.cartUpdated.next(this.cartItemsList)
    }

    RemoveItem(index:number){
        this.cartItemsList.splice(index, 1);
    }

}