import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultService } from '../../services/result-service.service';

import { FilterTypeComponent } from './filter-type.component';

describe('FilterTypeComponent', () => {
  let component: FilterTypeComponent;
  let fixture: ComponentFixture<FilterTypeComponent>;
  let resultService: ResultService;
  
  beforeEach(async () => {
    const resultServiceStub = jasmine.createSpyObj('ResultService',[
      'setFilterState',
      'resetFilterData'
    ]);
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ FilterTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeComponent);
    component = fixture.componentInstance;
    resultService = TestBed.inject(ResultService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
