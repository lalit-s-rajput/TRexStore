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
              import('./result/result.module').then((m) => m.ResultModule),
          },
          {
            path: 'cart',
            loadChildren: () =>
              import('./cart/cart.module').then((m) => m.CartModule),
          },
        ],
      },
    ],
  },
];
