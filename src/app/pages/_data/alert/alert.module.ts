import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { CustomChartsModule } from '../../_component/custom-charts.module';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    AlertRoutingModule,
    CustomChartsModule,
    NbAccordionModule,
    NbDatepickerModule,
    NbMomentDateModule,
    NbDateFnsDateModule.forChild({format: 'dd MM yyyy'}),
    NbSpinnerModule,
    NbInputModule,
    NbButtonModule,
    CommonModule,
  ],
  declarations: [
    AlertComponent,
    FiltroComponent,
  ],
  providers: [
    AlertService
  ],
})
export class AlertModule { }
