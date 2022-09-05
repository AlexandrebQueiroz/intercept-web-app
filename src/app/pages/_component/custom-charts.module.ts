import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import {  CustomBarChartComponent } from './bar-chart/bar-chart.component';
import { BarEchartsComponent } from './bar-echart/bar-echart.component';
import { CustomPieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  imports: [
    ChartModule,
    NgxEchartsModule,
  ],
  declarations: [
    BarEchartsComponent,
    CustomBarChartComponent,
    CustomPieChartComponent,
  ],
  exports:[
    BarEchartsComponent,
    CustomBarChartComponent,
    CustomPieChartComponent
  ],
  providers: [
  ],
})
export class CustomChartsModule { }
