import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AuthComponent } from './auth.component'
import { SharedModule } from '../Shared/shared.module'


const appRoutes : Routes = [
    { path: '', component:AuthComponent},
]

@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[
        RouterModule.forChild(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthModule {}