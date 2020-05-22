import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ChallengesRoutes } from './challenges.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(ChallengesRoutes),
  ],
  providers: []
})
export class ChallengesModule { }
