import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ChallangesRoutes } from './challanges.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(ChallangesRoutes),
  ],
  providers: []
})
export class ChallangesModule { }
