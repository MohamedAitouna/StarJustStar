import { Component } from '@angular/core';

@Component({
  selector: 'sjs-hello',
  templateUrl: './Hello.component.html',
  styleUrls: []
})
export class HelloComponent {

  onClick(topic) {
    console.log('onClick', topic);
  }
}
