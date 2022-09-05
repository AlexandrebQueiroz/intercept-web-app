import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';

import { AntennaRoutingModule } from './antenna-routing.module';
import { AntennaComponent } from './antenna.component';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    AntennaRoutingModule,
  ],
  declarations: [
    AntennaComponent,
  ],
  providers: [
  ],
})
export class AntennaModule { }
