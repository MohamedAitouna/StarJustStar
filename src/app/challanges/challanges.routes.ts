
import { Routes } from '@angular/router';

export const ChallangesRoutes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/Challanges/HelloChallanges', pathMatch: 'full' },
      {
        path: 'HelloChallanges', loadChildren: () => import('./hello-challanges/hello-challanges.module').
          then(module => module.HelloChallangesModule)
      },
      {
        path: 'GitRepos', loadChildren: () => import('./git-repos-challanges/git-repos-challanges.module').
          then(module => module.GitReposChallangesModule)
      }
    ]
  }
];
