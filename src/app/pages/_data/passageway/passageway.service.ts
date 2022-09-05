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
  
  getConstribuinteCadastrados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/constribuinte-cadastrados`);
  }

  getQuantidadeBlacklist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-blacklist`);
  }
  
  getQuantidadePassagem(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/quantidade-passagem`);
  }
}
