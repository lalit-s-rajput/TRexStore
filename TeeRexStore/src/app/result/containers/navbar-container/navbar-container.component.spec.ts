import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../../services/cart-service.service';

import { NavbarContainerComponent } from './navbar-container.component';

describe('NavbarContainerComponent', () => {
  let component: NavbarContainerComponent;
  let fixture: ComponentFixture<NavbarContainerComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let cartService: CartService;
  beforeEach(async () => {
    const cartServiceStub = jasmine.createSpyObj('CartService', [
      'getCartArrayCount',
    ]);
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [NavbarContainerComponent],
      providers: [{ provide: CartService, useValue: cartServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
