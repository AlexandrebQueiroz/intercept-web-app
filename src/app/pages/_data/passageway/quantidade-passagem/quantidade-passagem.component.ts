import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-passagem',
  styleUrls: ['./quantidade-passagem.component.scss'],
  templateUrl: './quantidade-passagem.component.html',
})
export class QuantidadePassagemComponent implements OnInit  {

  public data: any;
  public filtro: any;
  public loading: boolean = false;
  public submitted: boolean = false;

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
      final: new FormControl(new Date()),
    });
  }

  onSubmit(): void {
    this.loadData();
  }
  
  public loadData(){
    this.loading = true;
    this.service.getQuantidadePassagem({inicio: this.inicio.value, final: this.final.value}).subscribe(
      data => {
        this.data = data;
        this.loading = false;
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
