import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {

  constructor(private service:UserService) { }
  EmployeeList:any=[];
  bloodtype: string;

  ngOnInit(): void {
    this.refreshEmpList();
  }




  
  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });

  }



  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.UserId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }

  }


 Search(){

this.EmployeeList=this.EmployeeList.filter(res=>{

return res.BloodType.toLowerCase().match(this.bloodtype.toLowerCase());

})

  }

}
