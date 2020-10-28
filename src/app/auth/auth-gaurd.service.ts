import { Injectable } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGaurdService implements CanActivate {

    constructor(private authSer:AuthService,private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot, router:RouterStateSnapshot):boolean | Promise<boolean | UrlTree> | Observable<boolean |UrlTree>{
        return this.authSer.userSub.pipe(take(1),map(user=>{
            if(!!user){
                console.log('AuthGaurdService - User exist');
                
                return true
            }
            return this.router.createUrlTree(['/auth'])
        }))

    }

}