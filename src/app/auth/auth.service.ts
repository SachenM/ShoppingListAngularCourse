import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model'

export interface AuthResponseData {
  idToken : string,
  email : string,
  refreshToken : string,
  expiresIn : string,
  localId : string,
  registered? : boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSub = new BehaviorSubject<User>(null);

  constructor(private http : HttpClient) { }

  singUp(email : string, password : string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRgVDl-zwrDrgJSZHJR99eF3mFxSIm2qU',
    {'email':email, 'password':password})
    .pipe(catchError(this.handleError)
    ,tap(authRes => {this.handleAuthentication(authRes.email,authRes.localId,authRes.idToken,+authRes.expiresIn)}) )
  }



  logIn(username : string, password : string){

    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRgVDl-zwrDrgJSZHJR99eF3mFxSIm2qU",
    {'email':username, 'password':password,'returnSecureToken':true})
    .pipe(catchError(this.handleError)
    ,tap(authRes => {
      console.log('logIn');
      console.log();
      
      this.handleAuthentication(authRes.email,authRes.localId,authRes.idToken,+authRes.expiresIn)}))
  }


  private handleAuthentication(email:string,id:string,token:string,expiresIn:number){
    console.log('handleAuthentication');    
    console.log(expiresIn);
    console.log(new Date().getTime() + expiresIn * 1000);
    
    
    let expiresInDate:Date = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email,id,token,expiresInDate);
    this.userSub.next(user);
  }

  private handleError(errorRes:HttpErrorResponse){

      let errorMessage = 'An error occured!'

      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }else{
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS':
          errorMessage = 'The email already Exist!'
        }
        return throwError(errorMessage)
      }        
    
  }
}
