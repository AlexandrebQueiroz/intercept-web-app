import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-passagem',
  styleUrls: ['./quantidade-passagem.component.scss'],
  templateUrl: './quantidade-passagem.component.html',
})
export class QuantidadePassagemComponent implements OnInit  {
  
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
    this.service.getQuantidadePassagem(filtro).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }
}
  