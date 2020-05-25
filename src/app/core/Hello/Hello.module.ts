import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelloComponent } from './view/Hello.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class HelloModule { }
