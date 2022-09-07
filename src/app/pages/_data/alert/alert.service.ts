import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AlertService {

  getUrl(): string {
    return `${environment.baseUrl}`;
  }

  constructor(public http: HttpClient) {

  }

  get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/registro-passagem`);
  }
 
  getAlertasPrimeiraPassagem(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/registro-passagem-primeira-passagem`);
  }

  getEnviados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/enviados`);
  }

}
