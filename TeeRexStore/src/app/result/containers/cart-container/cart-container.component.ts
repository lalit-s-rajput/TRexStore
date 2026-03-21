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
  totalCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe((data:any)=>{
      this.productsArray = data;
      this.getCartAmount();
    });
  }

  getCartAmount(){
    if(this.productsArray){
      this.productsArray.forEach((product:any)=>{
        this.totalCount+=product.cartCount*product.price;
      });
    }
  }
  
  incrementProdCount(product:any){
    this.cartService.incrementProductCountInCart(product);
  }

  decrementProdCount(product:any){
    this.cartService.decrementProductCountInCart(product);
  }
}
