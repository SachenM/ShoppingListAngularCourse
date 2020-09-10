import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductsPanelComponent } from './products-panel/products-panel.component';
import { CartPanelComponent } from './cart-panel/cart-panel.component';
import { ManageComponent } from './manage/manage.component';
import { DetailsComponent } from './products-panel/details/details.component';
import { ProductsStartComponent } from './products-panel/products-start/products-start.component';
import { ProductEditComponent } from './Shared/component/product-edit/product-edit.component';

const appRoutes : Routes = [
    { path: '', redirectTo:'/products', pathMatch: 'full'},
    
    { path: 'products', component:ProductsPanelComponent, children:
        [
            { path: '', component:ProductsStartComponent},
            { path: ':id', component:DetailsComponent},
            { path: ':id/edit', component:ProductEditComponent}
        ]},
    { path: 'manage', component:ManageComponent, children:
    [        
        { path: 'new', component:ProductEditComponent}
    ]},
    { path: 'cart', component:CartPanelComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}