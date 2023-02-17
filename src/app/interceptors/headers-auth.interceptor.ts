import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Injectable()
export class HeadersAuthInterceptor implements HttpInterceptor {

  regex = new RegExp('localhost:7070');


  constructor(private _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userToken = UserService.getToken()
    if (this.regex.test(request.url)) {
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${userToken}`)
      })
      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          let message = ""
          switch (error.status) {
            case 400:
              message = "Bad Request "
              break;
            case 401:
              message = "Unauthorized "
              break;
            case 404:
              message = "Vous êtes pas bien connecté"
              break;

            default: message = "Erreur de connexion"
              break;
          }
          this._snackBar.open(message, "ok")
          return next.handle(modifiedReq)
        })
      )
    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersAuthInterceptor,
  multi: true
}