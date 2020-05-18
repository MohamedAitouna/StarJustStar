import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SjsButtonComponent } from './components/ui/sjs-button/sjsButton.component';


@NgModule({
  declarations: [
    SjsButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    SjsButtonComponent
  ],
  providers: []
})
export class SharedModule { }
