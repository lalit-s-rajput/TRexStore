import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {filterData} from '../../mock/mock-data';
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  mockFilterData: any;
  @Output() filterData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.mockFilterData = filterData;
    console.log(this.mockFilterData);
  }

  filterType(data:any){
    console.log(data);
    this.filterData.emit(data);
  }
}
