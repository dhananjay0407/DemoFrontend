import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {

 
  constructor() { }
  data:any=[];
  UserDetails:User;
  ngOnInit(): void
   {
     debugger
    console.log("data:",window.history.state.data.UserDetails)
    debugger
    this.data=window.history.state.data.UserDetails;
  



  }

}
