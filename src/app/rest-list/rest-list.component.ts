import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {

  data:string="Hi Welcome To eatyaa"
  placeholderData:string="Enter Restuarent Name"
  restName:string=""
  restList:any=[]


   constructor(private ds:DataService) { }

   ngOnInit(): void {
    this.ds.getRestaurants().subscribe((data:any)=>{
      this.restList=data.restaurants;
      console.log(this.restList);
      
      
    })
      //  (asynchronous method )
   }
  //  methods 
  method1(){
    alert(this.restName)
    this.restName="hi"
  }
  // method2(event:any){
  //         this.restName=event.target.value
  //       //  console.log(event.target.value);
         
  // }
  }


