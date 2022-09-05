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

        case url.includes('/constribuinte-cadastrados') && method === 'POST':{
          return this.ok()
        }

        case url.includes('/register-pass') && method === 'POST':{
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
