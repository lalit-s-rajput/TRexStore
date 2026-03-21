import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromContainers from './result/containers';
import * as fromComponents from './result/components';
import { RouterModule } from '@angular/router';
import {allRoutes} from './routes';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    fromContainers.containers,
    fromComponents.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
