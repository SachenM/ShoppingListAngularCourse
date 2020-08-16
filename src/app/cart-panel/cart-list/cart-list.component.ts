import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { cart } from '../cart.model';
import { product } from 'src/app/Shared/Model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit,OnChanges {
  @Input() cartItems:cart[];
    // =[
    //   new cart(new product(1,'Book2','Stationery',75.50,'long size','https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg')
    //   ,3)];
  //@Output() emitNoOfCart = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('CartListComponent - ngOnChanges')
    //this.cartItems.push( new cart(new product(1,'Book3','Stationery',75.50,'long size','https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg'),4))
    //this.cartItems.push(this.newCartAdded)
    //this.emitNoOfCart.emit(this.cartItems.push(this.newCartAdded))
  }

}
