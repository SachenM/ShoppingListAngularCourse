import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

const appRoutes : Routes = [
    { path: '', redirectTo:'/products', pathMatch: 'full'},
    { path: 'products', loadChildren: () => import('./products-panel/products.module').then(m => m.ProductsModule) },
    { path: 'cart', loadChildren: () => import('./cart-panel/cart.module').then(m => m.CartModule) },
    { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, { preloadingStrategy : PreloadAllModules })],
    exports:[RouterModule]
})
export class AppRoutingModule {

}