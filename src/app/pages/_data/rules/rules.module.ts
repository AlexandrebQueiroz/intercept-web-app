import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { RulesAddComponent } from './add/rules-add.component';
import { RulesDeleteComponent } from './delete/rules-delete.component';
import { RulesDuplicateComponent } from './duplicate/rules-duplicate.component';
import { RulesEditComponent } from './edit/rules-edit.component';
import { RulesFilterComponent } from './filter/rules-filter.component';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { RulesService } from './rules.service';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbInputModule,
    NbButtonModule,
    CommonModule,
    NbIconModule,
    RulesRoutingModule,
    NbSelectModule,
    NbDatepickerModule,
    NbCheckboxModule,
  ],
  declarations: [
    RulesComponent,
    RulesAddComponent,
    RulesEditComponent,
    RulesDuplicateComponent,
    RulesDeleteComponent,  
    RulesFilterComponent,
  ],
  providers: [
    RulesService,
  ],
})
export class RulesModule { }
