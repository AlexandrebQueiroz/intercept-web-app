import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { CustomChartsModule } from '../../_component/custom-charts.module';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    AlertRoutingModule,
    CustomChartsModule,
  ],
  declarations: [
    AlertComponent,
  ],
  providers: [
  ],
})
export class AlertModule { }
