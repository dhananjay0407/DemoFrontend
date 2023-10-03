import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  onSubmit(data){
    this.http.post('http://localhost:50476/Api/Register/PostAdmin',data)
    .subscribe((result)=>{
    
      console.warn("result",result)
      this.router.navigate(['AdminCrud']);
     
    
    })
    
    console.warn(data);
      }

  ngOnInit(): void {
  }

}
