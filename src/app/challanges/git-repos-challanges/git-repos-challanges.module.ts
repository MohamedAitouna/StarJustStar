import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';

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
    MatTableModule,
    SharedModule
  ],
  providers: []
})
export class GitReposChallangesModule { }
