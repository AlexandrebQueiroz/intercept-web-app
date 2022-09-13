import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'fis-vs-sefaz',
  styleUrls: ['./fis-vs-sefaz.component.scss'],
  templateUrl: './fis-vs-sefaz.component.html',
})
export class FisVsSefazComponent  {

  public data: any;
  public loaded = false;
  public form: FormGroup;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
  }

  ngOnInit(): void {
    this.filtrar({});
  }
  
  public filtrar(filtro){
    this.loaded = false;
    this.service.getFiiVsFazChart(filtro).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

}
