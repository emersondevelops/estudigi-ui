import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const username = 'emerson';
        const password = 'emerson123';
        const auth = 'Basic ' + window.btoa(username + ':' + password);

        req = req.clone({
            setHeaders: {
                Authorization : auth
            }
        });
        return next.handle(req);
    }
}
