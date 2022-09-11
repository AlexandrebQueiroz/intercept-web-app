import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesAddComponent } from './add/rules-add.component';
import { RulesDeleteComponent } from './delete/rules-delete.component';
import { RulesDuplicateComponent } from './duplicate/rules-duplicate.component';
import { RulesEditComponent } from './edit/rules-edit.component';

import { RulesComponent } from './rules.component';

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
    path: 'duplicate',
    component: RulesDuplicateComponent,
  },
  {
    path: 'delete',
    component: RulesDeleteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesRoutingModule {
}
