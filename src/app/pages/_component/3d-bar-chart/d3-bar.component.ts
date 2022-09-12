import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'd3-bar-chart',
  template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [legendTitle]="'Legenda'"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarCComponent implements OnDestroy, OnInit {

  @Input()
  public data: any[];
  results = [];

  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Produtos';
  yAxisLabel = 'Quantidade';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {

  }

  ngOnInit(): void {
    
    this.data?.forEach(d => {
      this.results.push(
        {name: d.titulo, value: d.valor}
      );
    })

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}
