import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as fromCartContainers from './containers';
import * as fromCartComponents from './components';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    fromCartContainers.cartContainers,
    fromCartComponents.cartComponents,
  ],
  imports: [CommonModule, FormsModule, CartRoutingModule],
  exports: [],
})
export class CartModule {}
