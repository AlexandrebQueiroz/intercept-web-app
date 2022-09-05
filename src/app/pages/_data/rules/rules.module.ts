import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    RulesRoutingModule,
    NbAccordionModule,
    NbInputModule,
    NbButtonModule,
  ],
  declarations: [
    RulesComponent,
  ],
  providers: [
  ],
})
export class RulesModule { }
