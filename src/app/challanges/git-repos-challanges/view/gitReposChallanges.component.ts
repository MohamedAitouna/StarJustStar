import { Component } from '@angular/core';

import { GitReposChallangesService } from '../services/gitReposChallanges.service';

@Component({
  selector: 'sjs-git-repos-challanges',
  templateUrl: './gitReposChallanges.component.html',
  providers: [GitReposChallangesService],
  styleUrls: ['./gitReposChallanges.component.css']
})
export class GitReposChallangesComponent {

  reposList = [];
  columns = ['avatar', 'detail'];
  counter = 0;
  canGetNewData = false;

  constructor(private gitReposChallangesService: GitReposChallangesService) {
    this.gitReposChallanges();
  }

  onTableScroll(event) {
    if (this.canGetNewData) {
      this.canGetNewData = false;
      this.gitReposChallanges();
    }
  }

  gitReposChallanges() {
    this.gitReposChallangesService.getRepos(this.counter).subscribe(result => {
      this.reposList = [...result];
      this.counter++;
      this.canGetNewData = true;
      console.log('result', result);
    });
  }


}
