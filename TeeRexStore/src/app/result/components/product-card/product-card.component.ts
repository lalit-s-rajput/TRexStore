import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import {NotificationService} from '../../services/notification.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  isEnabled = true;
  _product:any;
  @Input() set product(value:any){
    this._product = value;
    if(this._product.quantity===0){
      this.isEnabled = false;
    }
  };
  constructor(private cartService: CartService,private notification:NotificationService) { }

  ngOnInit(): void {
  }

  getUrl(product:any){
    return `url(${product.imageURL})`;
  }

  addToCart(product:any){
    this.isEnabled = false;
    if(product?.quantity){
      this.cartService.addToCartArray(product);
      this.notification.showSuccess('Item added to cart successfully !','Success');
      // product.quantity--;
    }
  }
}
