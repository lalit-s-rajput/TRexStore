import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output() searchData = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  searchProduct(event:any){
    this.searchData.emit(event.target.value.toLowerCase());
  }
}
