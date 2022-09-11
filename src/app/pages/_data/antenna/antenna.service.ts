import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AntennaService {

  constructor(public http: HttpClient) {

  }

  save(t: any[]): Observable<any> {
    return this.http.post<any>(`${environment.antena.salvar}`, t);
  }

}
