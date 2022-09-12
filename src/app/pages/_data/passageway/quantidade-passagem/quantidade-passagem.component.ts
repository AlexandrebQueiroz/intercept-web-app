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
  private lastMonth =  moment(new Date()).add(-1, 'months').toDate() 
  public data: any;
  public filtro: any;
  public loaded: boolean = false;

  public form: FormGroup;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
    this.createForm();
    this.loadData();
  }

  ngOnInit(): void {
  }

  public createForm() {
    this.form = this.fb.group({
      inicio: new FormControl(new Date()),
      final: new FormControl(this.lastMonth),
    });
  }

  onSubmit(): void {
    this.loadData();
  }
  
  public loadData(){
    this.loaded = false;
    this.service.getQuantidadePassagem({inicio: this.inicio.value, final: this.final.value}).subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
  }

  public getStatus(field: any): string {

     if (field.valid) {
       return 'success';
     }

     return 'danger';
  }

  public get inicio() {
    return this.form.get('inicio');
  }

  public get final() {
    return this.form.get('final');
  }

}
