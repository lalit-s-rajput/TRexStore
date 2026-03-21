import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  _productData:any;
  filteredData:any;
  resetFilter = false;
  @Input() set productData(value:any){
    if(value){
      this._productData = value;
      this.filteredData = value;
      this.searchData('');
    }
  }
  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
  }

  searchData(inputString:string){
    this.filteredData = this._productData?.filter((item:any)=>{
      return item.name.toLowerCase().includes(inputString);
    });
  }

  filterData(data:any){
    this.filteredData = this.filteredData?.filter((item:any)=>{
      return item[data.type.toLowerCase()].toLowerCase() === data.value.toLowerCase();
    });
    this.resetFilter = false;
    if(!this.filteredData.length){
      this.filteredData = this._productData;
      this.notification.showError('Result set is empty! Please try new filter or search.','Error!');
      this.resetFilter = true;
    }
  }
}
