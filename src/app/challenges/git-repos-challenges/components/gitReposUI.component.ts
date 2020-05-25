import { Component, Input } from '@angular/core';

@Component({
  selector: 'sjs-git-repos-ui',
  templateUrl: './gitReposUI.component.html',
  styleUrls: ['./gitReposUI.component.css']
})
export class GitReposUIComponent {

  @Input() repos: any;
  constructor() {

  }
}
