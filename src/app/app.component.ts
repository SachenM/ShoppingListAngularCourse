import { Component, Input, OnInit } from '@angular/core';
import { cart } from './cart-panel/cart.model';
import { ProductService } from './products-panel/products.service';
import {cartList} from './Shared/Service/cartList.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-app';
  selectedHeader:string = 'Home';
  //cartItemsList:cart[]=[]; 

  numberOfCart:number;

  constructor(private cartService : cartList,private prodService:ProductService){}
  
  ngOnInit(){
    console.log('In app comp')
    // this.prodService.setProductsFromDB()
    // this.cartService.cartUpdated.subscribe((c:cart[])=>{
    //   this.cartItemsList = c   })
  }


}
