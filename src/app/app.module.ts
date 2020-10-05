import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products-panel/product-list/product-list.component';
import { CartListComponent } from './cart-panel/cart-list/cart-list.component';
import { ProductItemComponent } from './products-panel/product-list/product-item/product-item.component';
import { CartItemComponent } from './cart-panel/cart-list/cart-item/cart-item.component';
import { DetailsComponent } from './products-panel/details/details.component';
import { ProductsPanelComponent } from './products-panel/products-panel.component';
import { CartPanelComponent } from './cart-panel/cart-panel.component';
import { DropdownDirective } from './Shared/directives/dropdown.directive';
import { cart } from './cart-panel/cart.model';
import { cartList } from './Shared/Service/cartList.service';


import { ProductService } from './products-panel/products.service'
import { AppRoutingModule } from './app-routing.module';
import { ManageComponent } from './manage/manage.component';
import { ProductsStartComponent } from './products-panel/products-start/products-start.component';
import { ProductEditComponent } from './Shared/component/product-edit/product-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './Shared/directives/click-stop-propagation.directive';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartListComponent,
    ProductItemComponent,
    CartItemComponent,
    DetailsComponent,
    ProductsPanelComponent,
    CartPanelComponent,
    DropdownDirective,
    ManageComponent,
    ProductsStartComponent,
    ProductEditComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [cartList,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
