import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  HistoryList:any=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.history();
  }

  history(){
    this.service.getHistryList().subscribe(data=>{
    this.HistoryList=data;
    
    });
    }

}
