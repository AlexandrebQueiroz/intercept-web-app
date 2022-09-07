import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { AntennaRoutingModule } from './antenna-routing.module';
import { AntennaComponent } from './antenna.component';
import { AntennaService } from './antenna.service';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    AntennaRoutingModule,
    NbInputModule,
    NbButtonModule,
    CommonModule,
  ],
  declarations: [
    AntennaComponent,
  ],
  providers: [
    AntennaService,
  ],
})
export class AntennaModule { }
