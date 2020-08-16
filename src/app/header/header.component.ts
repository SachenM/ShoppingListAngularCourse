import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerWasSelected = new EventEmitter<string>();
  @Input() numberOfCart:number;

  constructor() { }

  ngOnInit(): void {
  }

  onHeaderClicked(header:string){
    console.log('Header string : ' + header)
    this.headerWasSelected.emit(header);
  }

}
