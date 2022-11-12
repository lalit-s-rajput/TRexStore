import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-item-container',
  templateUrl: './cart-item-container.component.html',
  styleUrls: ['./cart-item-container.component.scss']
})
export class CartItemContainerComponent implements OnInit {
  @Input() product:any;
  @Output() incrementProdCount = new EventEmitter();
  @Output() decrementProdCount = new EventEmitter();
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  getUrl(){
    return `url(${this.product.imageURL})`;
  }

  removeItem(){
    this.cartService.removeProductFromCart(this.product);
  }

  incrementCount(product:any){
    this.incrementProdCount.emit(product);
  }

  decrementCount(product:any){
    this.decrementProdCount.emit(product);
  }
}
