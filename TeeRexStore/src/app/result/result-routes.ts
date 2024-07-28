import { Route } from '@angular/router';
import * as fromContainers from './containers';
export const routes: Route[] = [
  {
    path: '',
    component: fromContainers.ResultsContainerComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
