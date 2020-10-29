import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthComponent } from './auth.component'


const appRoutes : Routes = [
    { path: 'auth', component:AuthComponent},
]

@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[
        RouterModule.forRoot(appRoutes),
    ]
})
export class AuthModule {}