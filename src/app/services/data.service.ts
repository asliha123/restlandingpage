import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  serviceData:number=1000

  serviceMethod(){
    alert("service method worked")
  }
  // api call
  // access all restuarent datas
  getRestaurants(){
   return this.http.get('/assets/restaurants.json')
  }
}
