import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { product } from 'src/app/Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';
import { cartList } from 'src/app/Shared/Service/cartList.service';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() displayProduct:product;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private cartList:cartList, private prodService : ProductService) { }

  ngOnInit(): void {
    // this.prodService.prodductSelected.subscribe(
    //   (prod : product)=>{this.displayProduct = prod; }
    // )
    // //this.displayProduct=this.prodService.getProductList()[0];
    // console.log('Display : ' + this.displayProduct.name)
   }

  onAddToCart(){
    this.cartList.addToCart(new cart(this.displayProduct,this.amountInputRef.nativeElement.value))

  }

}
