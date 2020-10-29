import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ProductEditComponent } from './product-edit.component'

@NgModule({
    declarations:[
        ProductEditComponent
    ],
    exports:[
        ProductEditComponent
    ],
    imports:[
        ReactiveFormsModule, CommonModule,FormsModule
    ]
})
export class ProductEditModule {

}