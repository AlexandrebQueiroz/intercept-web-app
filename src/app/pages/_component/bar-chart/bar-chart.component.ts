import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'custom-bar-chart',
  template: '<chart type="bar" [data]="data" [options]="options"></chart>',
})
export class CustomBarChartComponent implements OnDestroy {
 
  @Input()
  public data: any;
  
  @Input()
  public options: any;
  private themeSubscription: any;

  private waterColors = ['#598bff','#42aaff','#ffaa00'];

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.options = {

        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }


  ngOnInit(): void {
    this.data.datasets.forEach((el, index) => {
      el.backgroundColor = NbColorHelper.hexToRgbA(this.waterColors[index], 0.8)
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
