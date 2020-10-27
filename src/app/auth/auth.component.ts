import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service'
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  islogInMode: boolean = true;
  isLoading : boolean = false;
  errorMessage : string;
  

  constructor(private authSer: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.UserName);

    const userName: string = form.value.UserName;
    const password: string = form.value.Password;
    console.log(this.islogInMode);


    let authObs:Observable<AuthResponseData>;

    
    this.isLoading = true
    if (this.islogInMode) {

      authObs = this.authSer.logIn(userName,password)
    } else {

      authObs = this.authSer.singUp(userName, password)

      
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;

        //this.authSer.user.next(new User(resData.email,resData.localId,resData.idToken,resData.expiresIn))
        this.router.navigate(['./products'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.errorMessage = errorMessage
        this.isLoading = false
      }
    )

  }

  switchlogInMode() {

    this.islogInMode = !this.islogInMode;
  }



}
