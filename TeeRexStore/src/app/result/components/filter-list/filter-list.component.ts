import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {filterData} from '../../mock/mock-data';
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  mockFilterData: any;
  _resetFilter = false;
  ismobileMode = false;
  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.ismobileMode = (event?.target?.innerWidth<=320) ? true : false;
    }
  @Output() filterData = new EventEmitter();
  @Output() hideFilterOnMobile = new EventEmitter<boolean>();
  @Input() set resetFilter(value:any){
    this._resetFilter = value ? true : false;
  }
  constructor() { }

  ngOnInit(): void {
    this.mockFilterData = filterData;
  }

  filterType(data:any){
    console.log(data);
    this.filterData.emit(data);
  }

  hideFilter(){
    this.hideFilterOnMobile.emit(true);
  }
}
