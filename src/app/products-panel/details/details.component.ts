import { Component, OnInit, Output, Input, ViewChild, ElementRef, OnChanges, EventEmitter, DoCheck, AfterViewInit, AfterContentChecked } from '@angular/core';
import { product } from 'src/app/Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,DoCheck,AfterViewInit,AfterContentChecked {
  @Input() displayProduct:product;
  previousProduct:product=new product(3,'dummy','dummy',10,'dummy','dummy');
  itemCount : number;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() addedToCart = new EventEmitter<cart>();
   

  constructor() { }

  ngOnInit(): void {
   
  }


  ngDoCheck(){
    //console.log('this.previousProduct : '+this.previousProduct+', this.displayProduct :'+this.displayProduct)
    // if (this.previousProduct != this.displayProduct){
    //    this.amountInputRef.nativeElement.value = null;
    // }
    //this.previousProduct = this.displayProduct;
  }


  ngAfterViewInit(){
  //   console.log('this.previousProduct : '+this.previousProduct+', this.displayProduct :'+this.displayProduct)
  //   if (this.previousProduct != this.displayProduct){
  //     this.amountInputRef.nativeElement.value = null;
  //  }
  }

  ngAfterContentChecked(){
        console.log('this.previousProduct : '+this.previousProduct+', this.displayProduct :'+this.displayProduct)
  //   if (this.previousProduct != this.displayProduct){
  //     this.amountInputRef.nativeElement.value = null;
  //  }
  }

  onAddToCart(){
    this.addedToCart.emit(new cart(this.displayProduct,this.amountInputRef.nativeElement.value));
  }

}
