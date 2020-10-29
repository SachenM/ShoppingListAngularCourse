import { NgModule } from '@angular/core'

import { CartPanelComponent } from './cart-panel.component'
import { CartListComponent } from './cart-list/cart-list.component'
import { CartItemComponent } from './cart-list/cart-item/cart-item.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'


const appRoutes : Routes = [
    { path: 'cart', component:CartPanelComponent}
]

@NgModule({
    declarations:[
        CartListComponent,    
        CartItemComponent,
        CartPanelComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class CartModule {}