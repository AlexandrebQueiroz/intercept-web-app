import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

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

  getFiiVsFazChartUrl(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/fii-vs-sefaz`);
  }
  
  getConstribuinteCadastrados(filtro: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/constribuinte-cadastrados/${filtro?.inicio}/${filtro?.final}`);
  }

  getQuantidadeBlacklist(filtro: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-blacklist/${filtro?.inicio}/${filtro?.final}`);
  }
  
  getQuantidadePassagem(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-passagem`);
  }
}
