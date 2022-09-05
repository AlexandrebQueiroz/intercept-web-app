import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AntennaComponent } from './antenna.component';

const routes: Routes = [{
  path: '',
  component: AntennaComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntennaRoutingModule {
}
