import { Component, OnInit,  Input, ViewChild, ElementRef } from '@angular/core';
import { product } from 'src/app/Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';
import { cartList } from 'src/app/Shared/Service/cartList.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() displayProduct:product;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private cartList:cartList) { }

  ngOnInit(): void { }

  onAddToCart(){
    this.cartList.addToCart(new cart(this.displayProduct,this.amountInputRef.nativeElement.value))

  }

}
