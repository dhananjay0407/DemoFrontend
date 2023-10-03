import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly APIUrl="http://localhost:50476/api";



  constructor(private http: HttpClient) { }
 

   getEmpList():Observable<any[]>{

    return this.http.get<any>(this.APIUrl+'/Register/');
   }

  deleteEmployee(val:any){


    return this.http.delete(this.APIUrl+'RegisterDetails/'+val); 
  
  
  }
  
  // AcceptApproveBloodRequestcount(val:any){

  //   return this.http.post(this.APIUrl+'/BloodStockIncrease',val);

  // }
  // deleteBloodRequest(val:any){

  //   return this.http.delete(this.APIUrl+'/BloodDonorRequest/'+val);

  // }

  donatebloodsubmit(val:any){

    return this.http.post('http://localhost:51269/api/DonorRequests/PostDonor',val);
  
  }



   getDonarList():Observable<any[]>{​​​
    return this.http.get<any>(this.APIUrl+'/DonorRequests/GetDonor');
     }​​​

      getBloodList():Observable<any[]>{​​​
        return this.http.get<any>(this.APIUrl+'/BloodRequests');
          }​​​
        



getHistryList():Observable<any[]>{​​​
return this.http.get<any>(this.APIUrl+'/Histories');
  }​​​


  deleteBloodDonorRequest(val:any){

    return this.http.delete(this.APIUrl+'/DonorRequests/'+val);
}

  AcceptApproveBloodDonorRequestcount(val:any){

    return this.http.post(this.APIUrl+'/BloodStockIncrease',val);

  }
  deleteBloodRequest(val:any){

    return this.http.delete(this.APIUrl+'/BloodDonorRequest/'+val);

  }

  AcceptApproveBloodRequestcount(val:any){

    return this.http.post(this.APIUrl+'/BloodStockIncrease',val);

  }

  getBloodStockList():Observable<any[]>{

    return this.http.get<any>(this.APIUrl+'/BloodStock');
  }
}
