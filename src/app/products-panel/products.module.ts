import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { ProductsPanelComponent } from'./products-panel.component'
import { ProductListComponent } from'./product-list/product-list.component'
import { ProductsStartComponent } from './products-start/products-start.component'
import { ProductItemComponent } from './product-list/product-item/product-item.component'
import { ProductEditModule } from '../Shared/component/product-edit/product-edit.module'
import { DetailsComponent } from './details/details.component'
import { ProductsRoutingModule } from "./products-routing.module"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'




@NgModule({
    declarations:[
        ProductListComponent,
        ProductItemComponent,
        ProductsStartComponent, 
        ProductsPanelComponent,
        DetailsComponent,    
    ],
    imports:[
        ProductEditModule,
        ProductsRoutingModule,
        ReactiveFormsModule, 
        CommonModule,
        FormsModule]
})
export class ProductsModule {}