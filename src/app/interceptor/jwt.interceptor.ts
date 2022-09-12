import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NbAuthService } from '@nebular/auth';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(    
        private authService: NbAuthService
    ){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('AQUI');
        if (this.authService.isAuthenticated) {

            const token = this.authService.getToken()
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(request);
    }
}