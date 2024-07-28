import { Route } from '@angular/router';
import * as cartContainers from './containers';
export const cartRoutes: Route[] = [
  {
    path: 'cart',
    component: cartContainers.CartContainerComponent,
  },
];
