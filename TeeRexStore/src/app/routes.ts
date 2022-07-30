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
                component:fromContainers.ResultsContainerComponent
            }
        ]
    }
];