import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(private http: HttpClient ) { }
  onSubmit(data){
this.http.post('http://localhost:50476/Api/Register/PostUser',data)
.subscribe((result)=>{

console.warn("result",result)

})
console.warn(data);


}
  user:any;
  ngOnInit(){

    


  }

  // addClick(){
  //   this.user={
  //      FirstName:"",
  //     LastName:"",
  //     Gender:"",
  //     BloodType:"",
  //     Email:"",
  //     City:"",
  //     Password:""
  //   }



}
