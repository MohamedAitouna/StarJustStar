

import { Routes } from '@angular/router';
import { HelloHomeComponent } from './hello-home/view/HelloHome.component';

export const CoreRoutes: Routes = [
  { path: '', redirectTo: '/Hello', pathMatch: 'full' },
  { path: 'Hello', component: HelloHomeComponent },
  {
    path: 'Challenges', loadChildren: () => import('../challenges/challenges.module').
      then(module => module.ChallengesModule)
  }
];
