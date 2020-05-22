import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';
import { GitReposChallengesComponent } from './view/gitReposChallenges.component';
import { GitReposUIComponent } from './components/gitReposUI.component';

export const GitReposChallengesRoutes: Routes = [{ path: '', component: GitReposChallengesComponent }];

@NgModule({
  declarations: [
    GitReposChallengesComponent,
    GitReposUIComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GitReposChallengesRoutes),
    MatTableModule,
    SharedModule
  ],
  providers: []
})
export class GitReposChallengesModule { }
