import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result-service.service';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {
  productListData$:any;
  constructor(private resultsService:ResultService) { }

  ngOnInit(): void {
    this.productListData$ = this.resultsService.getData();
  }

}
