import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen =!this.isOpen
  // }


  @HostBinding('style.backgroundColor') bcolor:string = 'red';

  @HostListener('click') toggleOpen() {
    if(this.bcolor=='red'){
      this.bcolor = 'green'
    }else{
      this.bcolor = 'blue'
    }

    
  }

  constructor() { }

}
