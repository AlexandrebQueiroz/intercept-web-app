import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbDatepickerModule, NbAccordionModule } from '@nebular/theme';
import { FiltroComponent } from './filtro.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbDateFnsDateModule.forChild({format: 'dd MM yyyy'}),
    NbDatepickerModule,
    NbAccordionModule,
  ],
  declarations: [
    FiltroComponent,
  ],
  exports:[
    FiltroComponent
  ],
})
export class FiltroModule { }
