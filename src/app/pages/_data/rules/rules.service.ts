import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RulesService {

  constructor(public http: HttpClient) {

  }

  get(filter?: any): Observable<any[]> {
    return this.http.get<any[]>(`${environment.regras.listar}/${filter?.data?.inicio}/${filter?.data?.final}`);
  }

  save(t: any): Observable<any> {
    return this.http.post<any>(`${environment}/regras`, t);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${environment}/regras/${id}`);
  }

}
