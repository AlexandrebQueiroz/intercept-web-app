import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'filtro',
  templateUrl: './filtro.component.html',
})
export class FiltroComponent  {

  @Input()
  public loaded = false;

  @Output()
  public filtrar = new EventEmitter()

  public form: FormGroup;

  private today = new Date();
  private lastMonth = moment(new Date()).add(-1, 'months').toDate() 

  constructor(
    public fb: FormBuilder,
    ){
    this.createForm();
  }

  public createForm() {
    this.form = this.fb.group({
      inicio: new FormControl(this.lastMonth),
      final: new FormControl(this.today),
    });
  }
  
  public onSubmit(){
    this.filtrar.emit(this.form.value);
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
