import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RulesService {

  getUrl(): string {
    return `${environment.baseUrl}`;
  }

  constructor(public http: HttpClient) {

  }

  get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/regras`);
  }

  save(t: any): Observable<any> {
    return this.http.post<any>(`${this.getUrl()}/regras`, t);
  }


}
