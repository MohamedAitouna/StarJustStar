import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const currentDate = new Date('2017-11-12');
const lastCurrentDate = new Date('2017-10-12');
@Injectable()
export class GitReposChallengesService {

  // configUrl = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=';
  configUrl = 'https://api.github.com/search/repositories?q=';
  createdDateUrlParam = 'created:>';
  urlLastParams = '&sort=stars&order=desc&page=';
  reposList = [];
  pageNumber = 1;

  constructor(private http: HttpClient) {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const dateString = date.toISOString().split('T')[0];
    this.configUrl += this.createdDateUrlParam + dateString + this.urlLastParams;
  }

  getRepos() {
    return this.http.get(this.configUrl + this.pageNumber)
      .pipe(
        map(result => this.filterGitRepos(result)),
        catchError(this.handleError) // then handle the error
      );
  }

  private filterGitRepos(result: any): Array<any> {
    if (result && result.items) {
      this.pageNumber++;
      return result.items;
    }
    return [];
  }

  private checkDate(item: any): boolean {
    if (item.created_at) {
      const itemCreationDate = new Date(item.created_at);
      return itemCreationDate > lastCurrentDate && itemCreationDate < currentDate;
    }
    return false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
