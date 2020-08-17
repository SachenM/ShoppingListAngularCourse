import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { cart } from '../cart-panel/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerWasSelected = new EventEmitter<string>();
  @Input() numberOfCart:number;
  @Input() cartItems :cart[]; 
  previousHeader : string;

  constructor() { }

  ngOnInit(): void {
  }

  onHeaderClicked(header:string){
    console.log('Header string : ' + header)
    var x:string;
    if(this.previousHeader==header){
      x=''
    }else{
      x=header
    }

    this.headerWasSelected.emit(x);
    this.previousHeader = x
  }

}
