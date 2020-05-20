import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sjs-button',
  templateUrl: './sjsButton.component.html'
})
export class SjsButtonComponent {

  @Input() label = 'Button ^^';
  @Input() color = '';

  @Output() sjsClick = new EventEmitter();

  click() {
    this.sjsClick.emit();
  }
}
