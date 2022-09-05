import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'custom-pie-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class CustomPieChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['ATACADISTA', 'VAREJISTA', 'PRODUTOR RURAL', 'INDUSTRIA', 'OUTROS'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Grupo',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 310, name: 'INDUSTRIA' },
              { value: 234, name: 'PRODUTOR RURAL' },
              { value: 135, name: 'VAREJISTA' },
              { value: 1548, name: 'ATACADISTA' },
              { value: 1548, name: 'OUTROS' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
