

import { Routes } from '@angular/router';
import { HelloHomeComponent } from './hello-home/view/HelloHome.component';

export const CoreRoutes: Routes = [
  { path: '', redirectTo: '/Hello', pathMatch: 'full' },
  { path: 'Hello', component: HelloHomeComponent },
  {
    path: 'Challanges', loadChildren: () => import('../challanges/challanges.module').
      then(module => module.ChallangesModule)
  }
];
