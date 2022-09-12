import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AlertService {

  constructor(public http: HttpClient) {

  }

  get(filtro?: any): Observable<any> {
    const parameter = this.prepareFiltro(filtro);
    return this.http.get<any>(`${environment.alerta.listar}/${parameter.inicio}/${parameter.final}`);
  }

  private prepareFiltro(filtro: any){
    
    if(!filtro){
      filtro = {};
      filtro.inicioFormatado = moment(new Date());
      filtro.finalFormatado = moment(new Date()).add(-3, 'months');
    } 
    
    const inicioFormatado = moment(filtro?.inicio).format(environment.format.data)
    const finalFormatado = moment(filtro?.finalFormatado).format(environment.format.data)

    return {inicio: inicioFormatado, final: finalFormatado };
  }
}
