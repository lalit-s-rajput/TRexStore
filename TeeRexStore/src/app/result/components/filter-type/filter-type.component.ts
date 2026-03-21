import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent implements OnInit {
  @Input() filterData: any;
  @Output() filterType = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.filterData);
  }

  filterItem(type:string,value:string,event:any){
    console.log(type);
    console.log(value);
    this.filterType.emit({type:type,value:value});
  }

}
