import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(private http :HttpClient, private router: Router,
    private formBuilder: FormBuilder, 
  ) { }
  onSubmit(data){
this.http.post('http://localhost:50476/Api/Register/LoginUser',data)
.subscribe((result)=>{

  console.warn("result",result)
  this.router.navigate(['Dash']);

})

console.warn(data);
  }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });    
    
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = (user != null);
    //   console.log(this.socialUser);
    // });
  }


  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // logOut(): void {
  //   this.socialAuthService.signOut();
  // }
  }


