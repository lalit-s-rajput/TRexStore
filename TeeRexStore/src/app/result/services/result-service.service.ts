import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter, filterState } from 'src/app/core/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  initialState:filterState = {
    color:[],
    gender:[],
    price:[],
    type:[]
  };
  resetFilter = false;
  filterState = new BehaviorSubject(this.initialState);
  resetFilterData = new BehaviorSubject(this.resetFilter);
  private dataUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.dataUrl);
  }

  getFilterState(){
    return this.filterState;
  }
  setFilterState(data:filter){
    let modifiedFilteredData:any = {};
    let typeOfFilter = data.type.toLocaleLowerCase();
    this.filterState.subscribe((data)=>{
      modifiedFilteredData = JSON.parse(JSON.stringify(data));
    });
    if(modifiedFilteredData[typeOfFilter]){
      if(data.isChecked){
        modifiedFilteredData[typeOfFilter].push(data.value);
      }else{
        modifiedFilteredData[typeOfFilter] = modifiedFilteredData[typeOfFilter].filter((item:any)=>{
          return item!==data.value
        });
      }
    this.filterState.next(modifiedFilteredData);
    }
  }

  resetFilterState(){
    this.filterState.next(this.initialState);
  }
}
