
import { Routes } from '@angular/router';

export const ChallengesRoutes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/Challenges/HelloChallenges', pathMatch: 'full' },
      {
        path: 'HelloChallenges', loadChildren: () => import('./hello-challenges/hello-challenges.module').
          then(module => module.HelloChallengesModule)
      },
      {
        path: 'GitRepos', loadChildren: () => import('./git-repos-challenges/git-repos-challenges.module').
          then(module => module.GitReposChallengesModule)
      }
    ]
  }
];
