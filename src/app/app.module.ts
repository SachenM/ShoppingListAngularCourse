import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './Shared/directives/dropdown.directive';
import { cartList } from './Shared/Service/cartList.service';


import { ProductService } from './products-panel/products.service'
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './Shared/directives/click-stop-propagation.directive';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingSpinnerComponent } from './Shared/component/loading-spinner/loading-spinner.component'
import { AuthInteceptorService } from './auth/auth-inteceptor.service'

import { ProductsModule } from './products-panel/products.module'
import { CartModule } from './cart-panel/cart.module'
import { ManageModule } from './manage/manage.module'
import { AuthModule } from './auth/auth.module'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,     
    ClickStopPropagationDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    ManageModule,
    AuthModule
  ],
  providers: [cartList,ProductService,
    {provide:HTTP_INTERCEPTORS,
    useClass:AuthInteceptorService,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
