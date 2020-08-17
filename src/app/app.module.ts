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
    DropdownDirective
  ],
  imports: [
    BrowserModule//,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
