import * as fromContainers from './result/containers';
import {AppComponent} from './app.component';
import { Route } from '@angular/router';

export const allRoutes: Route[] = [
    {
        path:'',
        component: AppComponent,
        children:[
            {
                path:'',
                component:fromContainers.NavbarContainerComponent,
                children: [
                    {
                        path: 'results',
                        component: fromContainers.ResultsContainerComponent
                    },
                    {
                        path: 'cart',
                        component: fromContainers.CartContainerComponent
                    }
                ]
            }
        ]
    }
];