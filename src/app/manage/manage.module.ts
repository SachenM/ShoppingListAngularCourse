import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ManageComponent } from './manage.component'
import { ProductEditModule } from '../Shared/component/product-edit/product-edit.module'
import { ProductEditComponent } from '../Shared/component/product-edit/product-edit.component'


const appRoutes : Routes = [
    { path: 'manage', component:ManageComponent, children:
    [        
        { path: 'new', component:ProductEditComponent}
    ]},
]

@NgModule({
    declarations:[
        ManageComponent
    ],
    imports:[
        RouterModule.forRoot(appRoutes),
        ProductEditModule
    ]
})
export class ManageModule {}