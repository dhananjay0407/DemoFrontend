import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-donar-request',
  templateUrl: './donar-request.component.html',
  styleUrls: ['./donar-request.component.css']
})
export class DonarRequestComponent implements OnInit {
  BloodRequestList:any=[];
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.historys();
  }


  
  historys(){
    this.service.getDonarList().subscribe(data=>{
    this.BloodRequestList=data;
    
    });
    }

  AcceptApproveBloodRequestcount(item:any){
    if(confirm('Are you sure??')){
    var val = {BloodGroup:item.BloodGroup,
    id:item.id,
    FullName:item.FullName,
    Email:item.Email
    };
    this.service.AcceptApproveBloodDonorRequestcount(val).subscribe((res: { toString: () => any; })=>{
    alert(res.toString());
    });
    }
    }

    deleteBloodrequestClick(item:any){
      if(confirm('Are you sure??')){
      this.service.deleteBloodDonorRequest(item.Id).subscribe((data: { toString: () => any; })=>{
      alert(data.toString());
      })
      }
      }
    
    
}
