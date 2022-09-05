import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassagewayComponent } from './passageway.component';

const routes: Routes = [{
  path: '',
  component: PassagewayComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassagewayRoutingModule {
}
