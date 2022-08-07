import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  isDesktopMode = true;
  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.isDesktopMode = (event?.target?.innerWidth<=320) ? false : true;
    }
  @Output() searchData = new EventEmitter<string>();
  @Output() showFilterIcon = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  searchProduct(event:any){
    this.searchData.emit(event.target.value.toLowerCase());
  }
  showFilter(){
    this.showFilterIcon.emit(true);
  }
}
