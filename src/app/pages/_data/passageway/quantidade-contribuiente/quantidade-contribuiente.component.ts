import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PassagemwayService } from '../passageway.service';

@Component({
  selector: 'quantidade-contribuiente',
  styleUrls: ['./quantidade-contribuiente.component.scss'],
  templateUrl: './quantidade-contribuiente.component.html',
})
export class QuantidadeContribuientesComponent  {

  public data: any;
  public loaded = false;
  public form: FormGroup;

  constructor(
    public service: PassagemwayService,
    public fb: FormBuilder,
    ){
    this.createForm();
  }

  ngOnInit(): void {
    this.service.getFiiVsFazChart().subscribe(
      data => {
        this.data = data;
        this.loaded = true;
      }
    );
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
    this.loaded = false;
    this.service.getConstribuinteCadastrados({inicio: this.inicio.value, final: this.final.value}).subscribe(
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
