import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-blood-stock',
  templateUrl: './blood-stock.component.html',
  styleUrls: ['./blood-stock.component.css']
})
export class BloodStockComponent implements OnInit {
  BloodStockList:any=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  BloodRecord() {
   
    this.service.getBloodStockList().subscribe(data=>{
    this.BloodStockList=data;
    });


}
}