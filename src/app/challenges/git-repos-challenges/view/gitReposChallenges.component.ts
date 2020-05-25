import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { GitReposChallengesService } from '../services/gitReposChallenges.service';
import { GitReposUIComponent } from '../components/gitReposUI.component';

@Component({
  selector: 'sjs-git-repos-challenges',
  templateUrl: './gitReposChallenges.component.html',
  providers: [GitReposChallengesService],
  styleUrls: ['./gitReposChallenges.component.css']
})
export class GitReposChallengesComponent implements AfterViewInit {

  reposList = [];
  columns = ['avatar', 'detail'];
  canGetNewData = false;

  @ViewChildren(GitReposUIComponent) gitReposUIComponentList: QueryList<GitReposUIComponent>;

  constructor(private gitReposChallengesService: GitReposChallengesService) {
    this.gitReposChallenges();
  }

  ngAfterViewInit() {

    /// Wait all Git Repos be drawn
    this.gitReposUIComponentList.changes.subscribe(value => {
      if (value.length && value.length === this.reposList.length) {
        this.canGetNewData = true;
      }
    });
  }

  onTableScroll(event) {
    if (this.canGetNewData) {
      const tableHeight = event.target.scrollHeight;
      const scrollLocation = event.target.scrollTop;
      if (tableHeight - scrollLocation < 1000) {
        this.canGetNewData = false;
        this.gitReposChallenges();
      }
    }
  }

  gitReposChallenges() {
    this.gitReposChallengesService.getRepos().subscribe(result => {
      this.reposList = this.reposList.concat(result);
    });
  }


}
