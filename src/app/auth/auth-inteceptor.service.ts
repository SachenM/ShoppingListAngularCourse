import { Injectable } from '@angular/core'
import {  HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http'

import { AuthService } from './auth.service'
import { exhaustMap, take } from 'rxjs/operators'

@Injectable()
export class AuthInteceptorService implements HttpInterceptor {

    constructor(private authSer:AuthService){}

    intercept(req:HttpRequest<any>,next:HttpHandler){

        return this.authSer.userSub.pipe(take(1),exhaustMap(user => {
            console.log('inteceptor1');
            console.log(user);
            

            if(!user){
                return next.handle(req)
            }
            const modifiedRequest = req.clone({
                params: new HttpParams().set('auth',user.token)})
                console.log('inteceptor2');
                
                console.log(user);
            return next.handle(modifiedRequest);
        }))        
    }
}