import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { RulesAddComponent } from './add/rules-add.component';
import { RulesDeleteComponent } from './delete/rules-delete.component';
import { RulesEditComponent } from './edit/rules-edit.component';

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
  ],
  declarations: [
    RulesComponent,
    RulesAddComponent,
    RulesEditComponent,
    RulesDeleteComponent,
  ],
  providers: [
    RulesService,
  ],
})
export class RulesModule { }
