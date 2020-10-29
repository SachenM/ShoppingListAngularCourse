import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { AuthGaurdService } from "../auth/auth-gaurd.service";
import { ProductEditComponent } from "../Shared/component/product-edit/product-edit.component";
import { DetailsComponent } from "./details/details.component";
import { ProductsPanelComponent } from "./products-panel.component";
import { ProductsStartComponent } from "./products-start/products-start.component";
import { ProductResolverService } from '../Shared/Service/product-resolver.service'


const appRoutes : Routes = [
    { path: 'products', component:ProductsPanelComponent,
    canActivate:[AuthGaurdService],
    children:
        [
            { path: '', component:ProductsStartComponent},
            { path: ':id', component:DetailsComponent,resolve:[ProductResolverService]},
            { path: ':id/edit', component:ProductEditComponent,resolve:[ProductResolverService]}
        ]},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class ProductsRoutingModule {

}