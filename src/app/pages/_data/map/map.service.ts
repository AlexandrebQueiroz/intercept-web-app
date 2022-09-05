import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MapService {

  getUrl(): string {
    return `${environment.baseUrl}`;
  }

  constructor(public http: HttpClient) {

  }
  
  getMap(): Observable<any[]> {
    return this.http.get<any[]>(`${this.getUrl()}/mapa`);
  }
}
