import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultService } from '../../services/result-service.service';
@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent implements OnInit {
  @Input() filterData: any;
  @Input() set resetFilter(value:any){
    if(value){
      this.resetForm();
    }
  }
  @Output() filterType = new EventEmitter();
  form: any;
  
  constructor(private resultsService: ResultService) { 
    
  }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.filterData);
  }

  initializeForm(){
    this.form = new FormGroup({
      checkArray: new FormArray([
      ])
    });
  }

  filterItem(type:string,value:string,event:any){
    const isChecked = (event.target as HTMLInputElement).checked;
    const filterData = {type:type,value:value,isChecked:isChecked};
    this.resultsService.setFilterState(filterData);
    // this.filterType.emit(filterData);
  }

  resetForm(){
    this.filterData?.data?.forEach((item:any) => {
      item.isSelected = false;
    });
  }

}
