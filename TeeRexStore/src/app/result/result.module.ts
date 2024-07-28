import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as fromContainers from './containers';
import * as fromComponents from './components';

import { ResultRoutingModule } from './result-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [CommonModule, FormsModule, ResultRoutingModule],
  providers: [],
})
export class ResultModule {}
