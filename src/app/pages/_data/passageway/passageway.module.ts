import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { NbAccordionModule, NbButton, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSpinnerComponent, NbSpinnerModule } from '@nebular/theme';
import { CustomChartsModule } from '../../_component/custom-charts.module';
import { FiltroModule } from '../../_filtro/filtro.module';
import { FisVsSefazComponent } from './fis-vs-sefaz/fis-vs-sefaz.component';
import { PassagewayRoutingModule } from './passageway-routing.module';
import { PassagewayComponent } from './passageway.component';
import { PassagemwayService } from './passageway.service';
import { QuantidadeBlacklistComponent } from './quantidade-blacklist/quantidade-blacklist.component';
import { QuantidadeContribuientesComponent } from './quantidade-contribuiente/quantidade-contribuiente.component';
import { QuantidadePassagemComponent } from './quantidade-passagem/quantidade-passagem.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    PassagewayRoutingModule,
    CustomChartsModule,
    NbMomentDateModule,
    FiltroModule,
  ],
  declarations: [
    PassagewayComponent,
    FisVsSefazComponent,
    QuantidadeContribuientesComponent,
    QuantidadeBlacklistComponent,
    QuantidadePassagemComponent,
  ],
  providers: [
    PassagemwayService,
  ],
})
export class PassagewayModule { }
