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

    if(!this.validarDatas(moment(this.form.value.inicio), moment(this.form.value.final))){
      return;
    }

    this.filtrar.emit(this.form.value);
  }

  private validarDatas(inicio: moment.Moment , final: moment.Moment): boolean {

      let diff = inicio.diff(final, 'd');

      if(!inicio.isValid()){
        this.toastrService.default(`Aviso`, `O período incial não é valido` );
        return false;
      }

      if(!final.isValid()){
        this.toastrService.default(`Aviso`, `O período final não é valido` );
        return false;
      }

      if(inicio.isAfter(final)){
        this.toastrService.default(`Aviso`, `O período inicial não pode ser posterior ao período final` );
        return false;
      }

      if(diff > 90){
        this.toastrService.default(`Aviso`, `O período máximo permitido é de 90 dias.` );
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
