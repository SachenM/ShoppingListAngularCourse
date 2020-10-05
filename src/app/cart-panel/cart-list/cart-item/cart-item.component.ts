import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { cartList } from 'src/app/Shared/Service/cartList.service';
import { cart } from '../../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit,OnDestroy{
  sub:Subscription;
  @Input() cartItem:cart;
  @Input() index:number;
  editMode:boolean;
  @ViewChild('editCart',{static:false}) etr:NgForm;

  constructor(private cartService: cartList) { }

  ngOnInit(): void {
  
    this.sub = this.cartService.EditingModeClicked.subscribe(
      (i:number)=>{
        console.log(this.index + " : " + i)
        if(this.index==i){  
          this.cartService.editMode = true;  
          this.editMode = this.cartService.editMode;
          //this.etr.setValue({ Amount:1 }) ;   
          setTimeout(() => { 

            this.etr.setValue({ Amount:this.cartItem.amount });
          },2);
          //this.etr.setValue({ Amount:this.cartItem.amount }) ;    
          //this.cartService.inEditingMode.next(i)          
         }else{  this.cartService.editMode = false; }
        
      }
    )
    
      

  }


  onUpdateQtn(editCart:NgForm){
    console.log('Hello')
    this.cartItem.amount=editCart.value.Amount
    this.cartService.updateCart(this.index,this.cartItem)
    
    this.cartService.editMode = false; 
    this.editMode = this.cartService.editMode;
  }


  onItemRemove(){
    console.log('Hello2')
    this.cartService.RemoveItem(this.index)
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
