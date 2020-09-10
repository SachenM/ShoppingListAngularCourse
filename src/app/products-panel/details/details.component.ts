import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { product } from 'src/app/Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';
import { cartList } from 'src/app/Shared/Service/cartList.service';
import { ProductService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayProduct:product;
  id:number;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private cartList:cartList,
     private prodService : ProductService,
     private route:ActivatedRoute) { }

  ngOnInit(): void {

    //const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.displayProduct = this.prodService.getProduct(this.id)
      }
    )



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
