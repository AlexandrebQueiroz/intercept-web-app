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
    
    if(!filtro){
      filtro = {};
      filtro.inicio = moment(new Date()).format("DD/MM/YYYY");
      filtro.final = moment(new Date()).add(1, 'months').format("DD/MM/YYYY");
    }

    const inicioFormated = moment(filtro?.inicio).format("DD/MM/YYYY");
    const finalFormated = moment(filtro?.final).format("DD/MM/YYYY");

    return this.http.get<any[]>(`${this.getUrl()}/fii-vs-sefaz/${inicioFormated}/${finalFormated}`);
  }
  
  getConstribuinteCadastrados(filtro?: any): Observable<any[]> {
    
    if(!filtro){
      filtro = {};
      filtro.inicio = moment(new Date()).format("DD/MM/YYYY");
      filtro.final = moment(new Date()).add(1, 'months').format("DD/MM/YYYY");
    }

    const inicioFormated = moment(filtro?.inicio).format("DD/MM/YYYY");
    const finalFormated = moment(filtro?.final).format("DD/MM/YYYY");

    return this.http.get<any[]>(`${this.getUrl()}/constribuinte-cadastrados/${inicioFormated}/${finalFormated}`);
  }

  getQuantidadeBlacklist(filtro?: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-blacklist/${filtro?.inicio}/${filtro?.final}`);
  }
  
  getQuantidadePassagem(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-passagem`);
  }
}
