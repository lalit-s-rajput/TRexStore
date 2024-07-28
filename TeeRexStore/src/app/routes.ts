import * as fromContainers from './result/containers';
import { AppComponent } from './app.component';
import { Route } from '@angular/router';

export const allRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: fromContainers.NavbarContainerComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./result/result-routing.module').then(
                (m) => m.ResultRoutingModule
              ),
          },
          {
            path: 'cart',
            loadChildren: () =>
              import('./cart/cart-routing.module').then(
                (m) => m.CartRoutingModule
              ),
          },
        ],
      },
    ],
  },
];
