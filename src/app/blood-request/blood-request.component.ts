import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {

  constructor(private service:UserService) { }
  BloodRequestList:any=[];
  ngOnInit(): void {
    this.historys();
  }


  
  historys(){
    this.service.getBloodList().subscribe(data=>{
    this.BloodRequestList=data;
    
    });
    }

  AcceptApproveBloodRequestcount(item:any){
    if(confirm('Are you sure??')){
    var val = {BloodGroup:item.BloodGroup,
    id:item.id,
    FullName:item.FullName,
    Email:item.Email
    }
    this.service.AcceptApproveBloodRequestcount(val).subscribe((res: { toString: () => any; })=>{
    alert(res.toString());
    });
    }
    }

    deleteBloodrequestClick(item:any){
      if(confirm('Are you sure??')){
      this.service.deleteBloodRequest(item.id).subscribe((data: { toString: () => any; })=>{
      alert(data.toString());
      })
      }
      }










  
}
