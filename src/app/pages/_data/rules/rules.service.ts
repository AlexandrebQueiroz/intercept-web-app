import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RulesService {

  constructor(public http: HttpClient) {}

  get(filter?: any): Observable<any[]> {
    return this.http.get<any[]>(`${environment.regras.listar}/${filter?.data?.inicio}/${filter?.data?.final}`);
  }

  save(t: any): Observable<any> {

    const result = [];
    t.produtos.forEach((p: string) => {
      result.push({codigo: 1, descricao: p})
    })
    t.produtos = result;

    return this.http.post<any>(`${environment.regras.salvar}`, t);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.regras.deletar}/${id}`);
  }

}
