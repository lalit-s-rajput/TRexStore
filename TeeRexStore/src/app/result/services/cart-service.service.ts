import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartArray:any = new BehaviorSubject([]);
  constructor() { }

  addToCartArray(product:any){
    // this.cartArray.next([...this.cartArray.value,product]);
    if(this.cartArray.value.length){
      this.cartArray.value.forEach((productData:any)=>{
        if(productData.id===product.id){
          productData.quantity-=1;
          product.cartCount+=1;
        }else{
          product.cartCount = 1;
          this.cartArray.next([...this.cartArray.value,product]);
          console.log(this.cartArray.value);
        }
      });
    }else{
      product.cartCount = 1;
      product.quantity-=1;
      this.cartArray.next([...this.cartArray.value,product]);
    }
  }

  getCartData(){
    return this.cartArray;
  }

  incrementProductCountInCart(product:any){
    this.cartArray.value.forEach((element:any)=>{
      if(element.id===product.id){
        element.cartCount+=1;
        element.quantity-=1;
        return;
      }
    });
  }

  decrementProductCountInCart(product:any){
    this.cartArray.value.forEach((element:any)=>{
      if(element.id===product.id){
        element.cartCount-=1;
        element.quantity+=1;
        return;
      }
    });
  }

  removeProductFromCart(product:any){
    let dataArray = [];
      dataArray = this.cartArray.value.filter((item:any)=>{
        return item.id!==product.id;
      });
    this.cartArray.next(dataArray);
  }
}
