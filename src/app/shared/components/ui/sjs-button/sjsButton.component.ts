import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sjs-button',
  templateUrl: './sjsButton.component.html'
})
export class SjsButtonComponent {

  @Output() sjsClick = new EventEmitter();

  click() {
    this.sjsClick.emit();
  }
}
