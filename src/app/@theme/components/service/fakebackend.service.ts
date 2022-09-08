import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mock from '../../../../assets/data/mock/chart.json';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
 
  constructor(public http: HttpClient) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, } = request;

      switch (true) {
        case url.includes('fii-vs-sefaz') && method === 'GET':{
          return this.ok(mock.chartFiiVsSefaz)
        }

        case url.includes('/constribuinte-cadastrados') && method === 'GET':{
          return this.ok(mock.quantidadeRegistrosdePassagem)
        }

        case url.includes('/quantidade-blacklist') && method === 'GET':{
          return this.ok(mock.quantidadeBlacklist)
        }

        case url.includes('/mapa') && method === 'GET':{
          return this.ok(mock.maps)
        }
        
        case url.includes('/regras') && method === 'GET':{
          return this.ok(mock.regras)
        }

        case url.includes('/regras') && method === 'POST':{
          return this.ok()
        }
        
        case url.includes('/regras') && method === 'DELETE':{
          return this.ok()
        }

        case url.includes('/registro-passagem') && method === 'GET':{
          return this.ok(mock.quantidadeRegistrospassagens)
        }

        case url.includes('/registro-passagem-primeira-passagem`') && method === 'GET':{
          return this.ok(mock.quantidadePrimeiraPassagem)
        }

        case url.includes('/enviados') && method === 'GET':{
          return this.ok(mock.quantidadeEnviados)
        }

        case url.includes('/antenna/save') && method === 'POST':{
          return this.ok()
        }
        

        default:
          return next.handle(request);
    }
  }

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }))
  }



}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
