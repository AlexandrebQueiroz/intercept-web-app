import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { D3BarCComponent } from './3d-bar-chart/d3-bar.component';
import { CustomBarChartComponent } from './bar-chart/bar-chart.component';
import { BarEchartsComponent } from './bar-echart/bar-echart.component';
import { CustomPieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  imports: [
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    BarEchartsComponent,
    CustomBarChartComponent,
    CustomPieChartComponent,
    D3BarCComponent,
  ],
  exports:[
    BarEchartsComponent,
    CustomBarChartComponent,
    CustomPieChartComponent,
    D3BarCComponent
  ],
  providers: [
  ],
})
export class CustomChartsModule { }
