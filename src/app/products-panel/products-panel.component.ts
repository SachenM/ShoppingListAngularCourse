import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  @Output() emitCart = new EventEmitter<cart>();
 productSelected : product;
  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(product:product){
    console.log('Item clicked ProductsPanel: '  +product)
    this.productSelected = product;
  }

  onCartWasAdded(cartAdded : cart){
    console.log('onCartWasAdded - ProductsPanelComponent' +cartAdded.product.name + cartAdded.amount)
    this.emitCart.emit(cartAdded)
  }

}
