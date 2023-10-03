import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:UserService) { }
  EmployeeList:any=[];
  data:any;

  ngOnInit(): void {
  }


  donatebloodsubmit(){

    var val = {
      BloodGroup: this.data.BloodGroup,
      Email:this.data.Email,
      Address:this.data.City,
      BloodQuantity:"200"

              };

    this.service.donatebloodsubmit(val).subscribe(res=>{

      alert(res.toString());

    

    });

  }




}
