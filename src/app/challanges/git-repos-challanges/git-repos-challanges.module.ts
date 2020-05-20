import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { GitReposChallangesComponent } from './view/gitReposChallanges.component';
import { GitReposUIComponent } from './components/gitReposUI.component';

export const GitReposChallangesRoutes: Routes = [{ path: '', component: GitReposChallangesComponent }];

@NgModule({
  declarations: [
    GitReposChallangesComponent,
    GitReposUIComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GitReposChallangesRoutes),
    SharedModule
  ],
  providers: []
})
export class GitReposChallangesModule { }
