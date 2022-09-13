import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
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
    private toastrService: NbToastrService,
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

    const inicio = moment(this.form.value.inicio);
    const final = moment(this.form.value.final);

    if(!this.validarDatas(inicio, final)){
      return;
    }

    this.filtrar.emit(this.form.value);
  }

  private validarDatas(inicio: moment.Moment , final: moment.Moment): boolean {

      let diff = moment(inicio).diff(moment(final), 'd');
      if(diff < 0 ){
        diff = diff * -1;
      }

      if(diff > 92){
        this.toastrService.default(`Aviso`, `O maximo período permitido é de 90 dias` );
        return false;
      }
    
      return true;
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
