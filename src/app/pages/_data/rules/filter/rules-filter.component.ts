import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NbDateTimePickerComponent } from '@nebular/theme';
import moment from 'moment';

@Component({
  selector: 'rules-filter',
  templateUrl: './rules-filter.component.html',
})
export class RulesFilterComponent {

  @Output() 
  public buscar = new EventEmitter();
  public filter: any;

  constructor(){
    this.filter = {
      id: null,
      nome: null,
      tipo: null,
      data: {
        inicio: null,
        final: null
      } ,
      status: null
    }

    this.filter.data.inicio = moment().add(-3, 'M'); 
    this.filter.data.final = moment();

  }

  submit(){
    if(this.filter?.id?.length === 0){
      this.filter.id  = null;
    }
    
    if(this.filter?.nome?.length === 0){
      this.filter.nome  = null;
    }
   
    if(this.filter?.tipo?.length === 0){
      this.filter.tipo = null;
    }

    if(this.filter?.data?.inicio?.length === 0){
      this.filter.data.inicio = null;
    }
   
    if(this.filter?.data?.final?.length === 0){
      this.filter.data.final = null;
    }
   
    if(this.filter.status?.length === 0){
      this.filter.status = null;
    }

    this.buscar.emit(this.filter);
  }

}