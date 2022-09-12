import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import moment from 'moment';

@Injectable()
export class PassagemwayService {


  getUrl(): string {
    return `${environment.baseUrl}`;
  }

  constructor(public http: HttpClient) {

  }

  save(t: any): Observable<any> {
    return this.http.post<any>(`${this.getUrl()}/create`, t);
  }

  getFiiVsFazChart(filtro?: any): Observable<any[]> {
    const parameter = this.prepareFiltro(filtro);
    return this.http.get<any[]>(`${this.getUrl()}/fii-vs-sefaz/${parameter.inicio}/${parameter.final}`);
  }
  
  getConstribuinteCadastrados(filtro?: any): Observable<any[]> {
    const parameter = this.prepareFiltro(filtro);
    return this.http.get<any[]>(`${environment.graficos.constribuinteCadastrados}/${parameter.inicio}/${parameter.final}`);
  }

  getQuantidadeBlacklist(filtro?: any): Observable<any[]> {
    const parameter = this.prepareFiltro(filtro);
    return this.http.get<any[]>(`${environment.graficos.blacklist}/${parameter.inicio}/${parameter.final}`);
  }
  
  getQuantidadePassagem(filtro?: any): Observable<any[]> {
    const parameter = this.prepareFiltro(filtro);
    return this.http.get<any[]>(`${environment.graficos.registroPassagem}/${parameter?.inicio}/${parameter?.final}`);
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
