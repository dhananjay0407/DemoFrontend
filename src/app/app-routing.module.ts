import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { BloodStockComponent } from './blood-stock/blood-stock.component';
import { HistoryComponent } from './history/history.component';
import { DonarRequestComponent } from './donar-request/donar-request.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { BarchartComponent } from './barchart/barchart.component';
const routes: Routes = [

{path: 'Register' , component: RegisterComponent},
{path: ' Login', component: LoginComponent}
, {path:  'Admin', component: AdminComponent},
{path: 'Home', component: HomeComponent},
{path: 'Contact', component: ContactUsComponent},
{path: 'AdminCrud', component: AdminCrudComponent},
{path: 'Dash', component: LogindashboardComponent},
{path: 'AdminCrud/AdminCrud/Stock', component: BloodStockComponent},
{path: 'AdminCrud/History', component : HistoryComponent},

{path: 'AdminCrud/Donar', component: DonarRequestComponent},
{path: 'AdminCrud/Blood', component : BloodRequestComponent},
{path: 'barchart', component: BarchartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
