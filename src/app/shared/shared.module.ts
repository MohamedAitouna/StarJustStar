import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { SjsButtonComponent } from './components/ui/sjs-button/sjsButton.component';
import { SjsTableComponent } from './components/ui/sjs-table/sjsTable.component';


@NgModule({
  declarations: [
    SjsButtonComponent,
    SjsTableComponent
  ],
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    SjsButtonComponent,
    SjsTableComponent
  ],
  providers: []
})
export class SharedModule { }
