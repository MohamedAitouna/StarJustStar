import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloChallangesComponent } from './view/HelloChallanges.component';
import { SharedModule } from '../../shared/shared.module';


export const HelloChallangesRoutes: Routes = [{ path: '', component: HelloChallangesComponent }];
@NgModule({
  declarations: [
    HelloChallangesComponent
  ],
  imports: [
    RouterModule.forChild(HelloChallangesRoutes),
    SharedModule
  ],
  providers: []
})
export class HelloChallangesModule { }
