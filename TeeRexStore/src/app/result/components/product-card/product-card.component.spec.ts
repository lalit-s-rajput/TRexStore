import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { CartService } from '../../services/cart-service.service';
import { NotificationService } from '../../services/notification.service';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let cartService: CartService;
  let NotificationService: NotificationService;
  beforeEach(async () => {
    const cartServiceStub = jasmine.createSpyObj('CartService',[
      'addToCartArray'
    ]);
    const NotificationServiceStub = jasmine.createSpyObj('NotificationService',[
      'showSuccess'
    ]);
    await TestBed.configureTestingModule({
      imports:[ToastrModule.forRoot()],
      declarations: [ ProductCardComponent ],
      providers:[{provide:CartService,useValue:cartServiceStub},{provide:NotificationService,useValue:NotificationServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
