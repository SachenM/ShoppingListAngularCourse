import { Component, OnInit, Input } from '@angular/core';
import {product} from 'src/app/Shared/Model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : product; 
  //= new product(1,'Book','Stationery',75.50,'long size','https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg');

  constructor() { }

  ngOnInit(): void {
  }

}
