import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  initialState:any = {
    color:[],
    gender:[],
    price:[],
    tShirtType:[]
  };
  filterState = new BehaviorSubject(this.initialState);
  private dataUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.dataUrl);
  }

  getFilterState(){

  }
  setFilterState(type:string,value:string){
    let modifiedFilteredData = {};
    if(this.initialState[type.toLocaleLowerCase()]){
      this.initialState.type.push(value);
      modifiedFilteredData = {
        ...this.initialState
      };
      return this.filterState.next(modifiedFilteredData);
    }
  }
}
