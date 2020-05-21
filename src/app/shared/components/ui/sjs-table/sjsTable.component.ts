import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sjs-table',
  templateUrl: './sjsTable.component.html'
})
export class SjsTableComponent {
  @Input() columns = [];
  @Input() dataSource = [];
}
