import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { cart } from '../cart.model';
import { cartList } from 'src/app/Shared/Service/cartList.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit,OnChanges {
  editMode:boolean = false;
  cartItems:cart[]=[];
  constructor(private cartService: cartList) { }

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe(
      (c:cart[])=>{
        this.cartItems = c;
      }
    )
    this.cartItems=this.cartService.getCartList();

  }

  ngOnChanges(){
    console.log('CartListComponent - ngOnChanges')
    this.editMode=true;
  }


    onItemSelected(i:number){
    console.log('onItemSelected' + i )
    this.cartService.EditingModeClicked.next(i)

  }



}
