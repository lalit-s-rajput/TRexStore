import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  _productData:any;
  filteredData:any;
  @Input() set productData(value:any){
    this._productData = value;
    this.searchData('');
  }
  constructor() { }

  ngOnInit(): void {
  }

  searchData(inputString:string){
    this.filteredData = this._productData?.filter((item:any)=>{
      return item.name.toLowerCase().includes(inputString);
    });
  }

  filterData(data:any){
    this.filteredData = this._productData?.fillter((item:any)=>{
      return item[data.type.toLowerCase()].toLowerCase() === data.value.toLowerCase();
    });
  }
}
