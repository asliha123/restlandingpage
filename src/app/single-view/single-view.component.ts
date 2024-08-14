import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  id:any=""
  singleRest:any={}

 constructor(private service:DataService,private rout:ActivatedRoute){}

 ngOnInit(): void {
   this.rout.params.subscribe((data:any)=>{
    this.id=data.id;
    // console.log(this.id);
    this.service.getRestaurants().subscribe((response:any)=>{
      this.singleRest=response.restaurants.find((i:any)=>i.id==this.id);
      // console.log(this.singleRest);
      
    })
    
   })  
 }
}

