import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultService } from '../../services/result-service.service';

import { ResultsContainerComponent } from './results-container.component';

describe('ResultsContainerComponent', () => {
  let component: ResultsContainerComponent;
  let fixture: ComponentFixture<ResultsContainerComponent>;
  let service: ResultService;
  beforeEach(async () => {
    const resultServiceStub = jasmine.createSpyObj('ResultService', [
      'getData',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ResultsContainerComponent],
      providers: [{ provide: ResultService, useValue: resultServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
