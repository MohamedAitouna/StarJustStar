import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelloHomeComponent } from './view/HelloHome.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HelloHomeComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class HelloHomeModule { }
