import { Component, Input } from '@angular/core';
import { cart } from './cart-panel/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  selectedHeader:string = 'Home';
  cartItemsList:cart[]=[]; 

  numberOfCart:number;

  oncartSelected(cart:cart){
    console.log('oncartSelected - AppComponent' + cart.amount)
    this.cartItemsList.push(cart);
    this.numberOfCart =  this.cartItemsList.length 
  }



}
