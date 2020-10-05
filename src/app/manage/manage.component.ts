import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../Shared/Service/product-data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private pds : ProductDataService) { }

  ngOnInit(): void {
  }

  loadProducts(){
    this.pds.saveDefaultProducts()
  }

  onGetProduct(){
    this.pds.getProduct(0)
  }

}
