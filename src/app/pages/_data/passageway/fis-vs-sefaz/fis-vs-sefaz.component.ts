import { Component } from '@angular/core';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'fis-vs-sefaz',
  styleUrls: ['./fis-vs-sefaz.component.scss'],
  templateUrl: './fis-vs-sefaz.component.html',
})
export class FisVsSefazComponent  {

  public data: any;
  public loaded = false;

  constructor(
    public service: PassagemwayService,
    ){
  }

  ngOnInit(): void {
    this.service.getFiiVsFazChartUrl().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
