import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { cartList } from './Shared/Service/cartList.service';
import { ProductService } from './products-panel/products.service'
import { AuthInteceptorService } from './auth/auth-inteceptor.service'




@NgModule({
    providers:[cartList,
        ProductService,
        {
            provide:HTTP_INTERCEPTORS,
            useClass:AuthInteceptorService,
            multi:true
        }
      ]
})
export class CoreModule {}