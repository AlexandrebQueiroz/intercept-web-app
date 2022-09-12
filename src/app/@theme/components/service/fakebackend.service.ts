import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import usuario from '../../../../assets/data/mock/usuario.json';
import registroPassagem from '../../../../assets/data/mock/quantidade-registro-passagem.json';
import regras from '../../../../assets/data/mock/regras.json';
import regra from '../../../../assets/data/mock/regra.json';
import blacklist from '../../../../assets/data/mock/quantidade-registro-blacklist.json';
import fisVsSefaz from '../../../../assets/data/mock/fis-vs-sefaz.json';
import antena from '../../../../assets/data/mock/antena.json';
import alerta from '../../../../assets/data/mock/alerta.json';
import quantidadeCotribuintesCadatrados from '../../../../assets/data/mock/quantidade-contribuiente-cadastrados.json';

import { environment } from '../../../../environments/environment';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
 
  constructor(public http: HttpClient) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, } = request;

      switch (true) {
        case url.includes(environment.graficos.fisVsSefaz) && method === 'GET':{
          const data = fisVsSefaz.chartFiiVsSefaz;
          data.datasets.forEach(d => {
            d.data = [ 
              getRandomArbitrary(0, 1000),
              getRandomArbitrary(0, 1000),
              getRandomArbitrary(0, 1000),
              getRandomArbitrary(0, 1000),
              getRandomArbitrary(0, 1000),
              getRandomArbitrary(0, 1000)
             ];
          })

          return this.ok(data)
        }

        case url.includes(environment.graficos.blacklist) && method === 'GET':{
          const data = blacklist.quantidadeBlacklist;
          data.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })

          return this.ok(data)
        }

        case url.includes(environment.graficos.registroPassagem) && method === 'GET':{
          const data = registroPassagem.quantidadeRegistrospassagens;
          data.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })
          
          return this.ok(data)
        }
        case url.includes(environment.graficos.constribuinteCadastrados) && method === 'GET':{
          const data = quantidadeCotribuintesCadatrados.quantidadeContribuientesCadastrados;
          data.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })
          return this.ok(data) 
        }

        case url.includes(environment.antena.listar) && method === 'GET':{
          return this.ok(antena.antena.points)
        }

        case url.includes(environment.antena.salvar) && method === 'POST':{
          return this.ok()
        }
        
        case url.includes(environment.regras.listar) && method === 'GET':{
          return this.ok(regras.regras)
        }

        case url.includes('/regras') && method === 'POST':{
          return this.ok(regra)
        }
        
        case url.includes('/regras') && method === 'DELETE':{
          return this.ok()
        }

        case url.includes(environment.alerta.listar) && method === 'GET':{

          const data = alerta;
          data.quantidadeAlertasGerados.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })
          
          data.quantidadePrimeiraPassagem.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })
          
          data.quantidadeEnviados.forEach(d => {
            d.valor = getRandomArbitrary(0, 1000);
          })


          return this.ok(data)
        }

        case url.includes(environment.autenticacao.logar) && method === 'POST':{
          return this.ok(usuario.usuario)
        }
        
        default:
          return next.handle(request);
    }
  }

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body })).pipe(delay(getRandomArbitrary(0,1000)))
  }

}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
