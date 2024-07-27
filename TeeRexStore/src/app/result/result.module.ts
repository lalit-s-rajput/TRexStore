import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as fromContainers from './containers';
import * as fromComponents from './components';

import { ResultRoutingModule } from './result-routing.module';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [BrowserModule, FormsModule, ResultRoutingModule],
  providers: [],
})
export class ResultModule {}
