import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as fromCartContainers from './containers';
import * as fromCartComponents from './components';
import { CartRoutingModule } from './cart-routing.module';
@NgModule({
  declarations: [
    fromCartContainers.cartContainers,
    fromCartComponents.cartComponents,
  ],
  imports: [BrowserModule, FormsModule, CartRoutingModule],
  exports: [],
})
export class CartModule {}
