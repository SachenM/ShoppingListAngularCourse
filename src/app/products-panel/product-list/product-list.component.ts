import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../../Shared/Model/product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : product[]=[];


  constructor(private prodService : ProductService) { }

  ngOnInit(): void {
    this.products=this.prodService.getProductList()    
  }



}
