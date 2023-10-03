import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { User } from '../user';
import { Observable } from 'rxjs';  
import { FormBuilder, Validators } from '@angular/forms'; 
import { Data } from '@angular/router';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  url= 'http://localhost:50476//Api/Register/GetUser';
  

  Register:Data[];
  data1:any=[];
  BloodGroup:any=[];
  City:any[];
chart:any=[];        

LoginID:any=[];
total:number=0;
STotal:number=0;
perc: Array<number>=[];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.data1.push(x);
      }); 
      console.log(this.data1)
      const map = this.data1.reduce((acc: { set: (arg0: any, arg1: any) => any; get: (arg0: any) => any; }, e: any) => acc.set(e, (acc.get(e) || 0) + 1), new Map());  

      console.log("dept: ",map,this.data1.length)
this.total=this.data1.length;
// this.perc.push(Math.floor((map.get('HR')/this.total)*100));
// this.perc.push(Math.floor((map.get('IT')/this.total)*100));
// this.perc.push(Math.floor((map.get('CS')/this.total)*100));
// this.perc.push(Math.floor((map.get('SaleFroce')/this.total)*100));
// this.perc.push(Math.floor((map.get('Finance')/this.total)*100));
this.LoginID=Array.from( map.keys() );
this.perc=Array.from( map.values());

console.log("hr:" ,this.perc)
      this.chart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.LoginID,  
          datasets: [  
            {  
              data:this.perc,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
               fill: true
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true 
            }],  
          }  
        }  
      });  
    });  
  }  

}
  