import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'antennas',
      loadChildren: () => import('./_data/antenna/antenna.module')
        .then(m => m.AntennaModule),
    },
    {
      path: 'passageway',
      loadChildren: () => import('./_data/passageway/passageway.module')
        .then(m => m.PassagewayModule),
    },
    {
      path: 'alerts',
      loadChildren: () => import('./_data/alert/alert.module')
        .then(m => m.AlertModule),
    },
    {
      path: 'map',
      loadChildren: () => import('./_data/map/map.module')
        .then(m => m.MapModule),
    },
    {
      path: 'rules',
      loadChildren: () => import('./_data/rules/rules.module')
        .then(m => m.RulesModule),
    },
    {
      path: '',
      redirectTo: 'passageway',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
