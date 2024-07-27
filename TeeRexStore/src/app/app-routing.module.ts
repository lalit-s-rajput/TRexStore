import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { allRoutes } from './routes';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(allRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
