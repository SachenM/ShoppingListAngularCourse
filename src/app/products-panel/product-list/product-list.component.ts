import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../../Shared/Model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  array : number[] = [1,2,3,4];
  @Output() itemSelected = new EventEmitter<product>();
  products : product[] = [
    new product(1,'Book','Stationery',75.50,'long size','https://www.vyaparx.com/image/cache/catalog/CLASSMATE/41ELoyvtLnL-550x550w.jpg'),
    new product(2,'Pen','Stationery',25.00,'Black Ink','https://n4.sdlcdn.com/imgs/a/9/5/Nataraj-Black-Ink-Ball-Pen-SDL289708845-1-0bb3f.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(productselected:product){
    console.log('Item clicked : ' + 'll' +productselected)
    this.itemSelected.emit(productselected);
  }

}
