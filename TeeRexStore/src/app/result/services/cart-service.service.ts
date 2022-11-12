import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartArray:any = new BehaviorSubject([]);
  private cartArrayCount = new BehaviorSubject<number>(0);
  constructor() { }

  addToCartArray(product:any){
    let ifIsInCart = false;
    if (this.cartArray.value.length) {
      this.cartArray.value.forEach((productData: any) => {
        if (productData.id === product.id) {
          ifIsInCart = true;
          productData.quantity -= 1;
          product.cartCount += 1;
          this.cartArrayCount.next(this.cartArrayCount.value + 1);
        }
      });
      if (!ifIsInCart) {
        product.cartCount = 1;
        product.quantity -= 1;
        this.cartArray.next([...this.cartArray.value, product]);
        this.cartArrayCount.next(this.cartArrayCount.value + 1);
      }
    } else {
      product.cartCount = 1;
      product.quantity -= 1;
      this.cartArray.next([...this.cartArray.value,product]);
      this.cartArrayCount.next(this.cartArray.value.length);
    }
  }


  getCartData(){
    return this.cartArray;
  }

  getCartArrayCount(){
    return this.cartArrayCount;
  }

  incrementProductCountInCart(product:any){
    this.cartArray.value.forEach((element:any)=>{
      if(element.id===product.id){
        element.cartCount+=1;
        element.quantity-=1;
        return;
      }
    });
    this.cartArrayCount.next(this.cartArrayCount.value+1);
  }

  decrementProductCountInCart(product:any){
    this.cartArray.value.forEach((element:any)=>{
      if(element.id===product.id){
        element.cartCount-=1;
        element.quantity+=1;
        return;
      }
    });
    this.cartArrayCount.next(this.cartArrayCount.value-1);
  }

  removeProductFromCart(product:any){
    let dataArray = [];
      dataArray = this.cartArray.value.filter((item:any)=>{
        return item.id!==product.id;
      });
    this.cartArray.next(dataArray);
    this.cartArrayCount.next(this.cartArrayCount.value);
  }
}
