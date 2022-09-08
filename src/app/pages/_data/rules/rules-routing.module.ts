import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesAddComponent } from './add/rules-add.component';
import { RulesEditComponent } from './edit/rules-edit.component';

import { RulesComponent } from './rules.component';
import { RulesToViewComponent } from './to-view/rules-to-view.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
  },
  {
    path: 'add',
    component: RulesAddComponent,
  },
  {
    path: 'edit',
    component: RulesEditComponent,
  },
  {
    path: 'to-view',
    component: RulesToViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesRoutingModule {
}
