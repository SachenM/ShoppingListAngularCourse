import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../Shared/Model/product.model';
import { cart } from 'src/app/cart-panel/cart.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  @Output() emitCart = new EventEmitter<cart>();
 productSelected : product;
  constructor(private prodService : ProductService) {
    
   }

  ngOnInit(): void {
    this.prodService.prodductSelected.subscribe(
      (p:product)=>{
        this.productSelected = p;
      }
    )
  }


}
