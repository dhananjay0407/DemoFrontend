import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { BloodStockComponent } from './blood-stock/blood-stock.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { HistoryComponent } from './history/history.component';
import { LogoutComponent } from './logout/logout.component';
import { DonarRequestComponent } from './donar-request/donar-request.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';

 import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
 import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ContactUsComponent,
    AdminCrudComponent,
    LogindashboardComponent,
    BloodStockComponent,
    BloodRequestComponent,
    HistoryComponent,
    LogoutComponent,
    DonarRequestComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '771220570263-ccmqukeltifta5af278l04aumrov4m94.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
