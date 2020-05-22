import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloChallengesComponent } from './view/HelloChallenges.component';
import { SharedModule } from '../../shared/shared.module';


export const HelloChallengesRoutes: Routes = [{ path: '', component: HelloChallengesComponent }];
@NgModule({
  declarations: [
    HelloChallengesComponent
  ],
  imports: [
    RouterModule.forChild(HelloChallengesRoutes),
    SharedModule
  ],
  providers: []
})
export class HelloChallengesModule { }
