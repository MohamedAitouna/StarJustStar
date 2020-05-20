import { Component } from '@angular/core';

import { GitReposChallangesService } from '../services/gitReposChallanges.service';

@Component({
  selector: 'sjs-git-repos-challanges',
  templateUrl: './gitReposChallanges.component.html',
  providers: [GitReposChallangesService],
  styleUrls: []
})
export class GitReposChallangesComponent {

  reposList = [];
  constructor(private gitReposChallangesService: GitReposChallangesService) {
    this.gitReposChallangesService.getRepos().subscribe(result => {
      this.reposList = result;
      console.log('result', result);
    });
  }

}
