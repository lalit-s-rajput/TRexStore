import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  // @Input()
  productsArray = []; 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe((data:any)=>{
      this.productsArray = data;
    });
  }

  incrementProdCount(product:any){
    this.cartService.incrementProductCountInCart(product);
  }

  decrementProdCount(product:any){
    this.cartService.decrementProductCountInCart(product);
  }
}
