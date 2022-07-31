import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {filterData} from '../../mock/mock-data';
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  mockFilterData: any;
  @Output() filterData = new EventEmitter();
  @Input() set resetFilter(value:any){
    if(value){
      this.mockFilterData = filterData;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.mockFilterData = filterData;
  }

  filterType(data:any){
    console.log(data);
    this.filterData.emit(data);
  }
}
