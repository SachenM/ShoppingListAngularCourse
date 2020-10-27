import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { cart } from '../cart-panel/cart.model';
import { cartList } from '../Shared/Service/cartList.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
 // @Output() headerWasSelected = new EventEmitter<string>();

 userSubscription:Subscription;
 isAuthenticated:boolean = false;

   numberOfCart:number;
  @Input() cartItems :cart[]; 
  previousRoute : string = '/';
  cartOpened =false;



  constructor(private cartService :cartList,
    private route:ActivatedRoute,
    private router:Router,
    private authSer : AuthService) { }

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe(
      (cartList1 : cart[])=>{
        this.numberOfCart = cartList1.length
      }
    )

    this.userSubscription = this.authSer.userSub.subscribe(user=>{           
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
    })
  }

  onCartClicked(){
    console.log('Header string : ' + this.router.url)
    
    if (this.router.url === '/cart')
    {
      console.log(this.previousRoute)
      this.router.navigate([this.previousRoute])
    }
    else{
      this.previousRoute=this.router.url
      this.router.navigate(['cart'],{relativeTo:this.route})
    }
    

    //Logic to toggle the cart in header.
  //   var x:string;
  //   if(this.previousHeader==header){
  //     x=''
  //   }else{
  //     x=header
  //   }

  //   //this.headerWasSelected.emit(x);
  //   this.previousHeader = x
   }


   ngOnDestroy(){
    this.userSubscription.unsubscribe();
   }
}
