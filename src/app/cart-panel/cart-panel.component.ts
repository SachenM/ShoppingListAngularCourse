import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cart } from './cart.model';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css']
})
export class CartPanelComponent implements OnInit {
  @Input() cartItems :cart[]; 
  constructor() { }

  ngOnInit(): void {
  }



}
