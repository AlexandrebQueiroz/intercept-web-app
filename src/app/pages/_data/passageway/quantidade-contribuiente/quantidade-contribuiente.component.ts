import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-contribuiente',
  styleUrls: ['./quantidade-contribuiente.component.scss'],
  templateUrl: './quantidade-contribuiente.component.html',
})
export class QuantidadeContribuientesComponent  {
  public data: any;
  public loaded = false;

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
    this.service.getConstribuinteCadastrados(filtro).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }


}
