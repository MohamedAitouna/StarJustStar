import { NgModule } from '@angular/core';

import { HelloComponent } from './view/Hello.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    SharedModule
  ],
  providers: []
})
export class HelloModule { }
