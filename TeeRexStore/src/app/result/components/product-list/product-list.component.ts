import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { filterState } from 'src/app/core/interface/interface';
import { NotificationService } from '../../services/notification.service';
import { ResultService } from '../../services/result-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  _productData:any;
  filteredData:any;
  isDesktopMode = true;
  resetFilter = false;
  @ViewChild('filterPage',{static:false}) filterPage:ElementRef | undefined;

  @Input() set productData(value:any){
    if(value){
      this._productData = value;
      this.filteredData = value;
      this.searchData('');
    }
  }
  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.isDesktopMode = (event?.target?.innerWidth<=320) ? false : true;
    }
  constructor(private notification: NotificationService,
             private resultSrvice: ResultService,
             private renderer: Renderer2
             ) { }

  ngOnInit(): void {
    this.resultSrvice.filterState.subscribe((item)=>{
      if(this._productData){
        this.filterData(item);
      }
    });
  }

  searchData(inputString:string){
    this.filteredData = this._productData?.filter((item:any)=>{
      return item.name.toLowerCase().includes(inputString);
    });
  }

  filterData(filterArray:any){
    this.filteredData = this._productData;
    for(let filterType in filterArray){
      if(filterArray[filterType].length){
        filterArray[filterType].forEach((type: string) => {
          if(filterType === 'price'){
            let priceFilterData = type.split('-');
            this.filteredData = this.filteredData?.filter((item:any)=>{
              return (item[filterType.toLowerCase()] >= +priceFilterData[0] && item[filterType.toLowerCase()] <= +priceFilterData[1]);
            });
          } else {
            this.filteredData = this.filteredData?.filter((item:any)=>{
              return item[filterType.toLowerCase()].toLowerCase() === type.toLocaleLowerCase();
            });
          }
        });
      }
    };
    this.resetFilter = false;
    this.resultSrvice.resetFilterData.next(this.resetFilter);
    if(!this.filteredData?.length){
      this.filteredData = this._productData;
      this.notification.showError('Result set is empty! Please try new filter or search.','Error!');
      this.resetFilter = true;
      this.resultSrvice.resetFilterData.next(this.resetFilter);
      this.resultSrvice.resetFilterState();
    }
  }

  showFilterIcon(event:boolean){
    if(event){
      this.renderer.setStyle(this.filterPage?.nativeElement,'width','100%');
    }
  }

  hideFilterOnMobile(event:boolean){
    if(event){
      this.renderer.setStyle(this.filterPage?.nativeElement,'width','0');
    }
  }
}
