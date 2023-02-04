import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationService } from '../../services/notification.service';
import { ResultService } from '../../services/result-service.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let resultService: ResultService;
  let notificationService: NotificationService;
  beforeEach(async () => {
    const resultServiceStub = jasmine.createSpyObj('ResultService',[
      'addToCartArray'
    ]);
    const NotificationServiceStub = jasmine.createSpyObj('NotificationService',[
      'showError'
    ]);
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers:[{provide:ResultService,useValue:resultServiceStub},{provide:NotificationService,useValue:NotificationServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
