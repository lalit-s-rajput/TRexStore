import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemContainerComponent } from './cart-item-container.component';

describe('CartItemContainerComponent', () => {
  let component: CartItemContainerComponent;
  let fixture: ComponentFixture<CartItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
