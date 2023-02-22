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
export class TokenInterceptor implements HttpInterceptor {


  regex = new RegExp('localhost:7070');

  constructor(private _snackbar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const userToken = UserService.getToken(); //** utilisation de la fonction static du service UserService getToken() */

    if (this.regex.test(request.url)) {
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${userToken}`)
      })

      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          let message = ""
          switch (error.status) {
            case 400:
              message = "Bad Request bro"
              break;
            case 401:
              message = "Password or mail not correct"
              break;
            case 404:
              message = "Vous n'êtes pas bien connecté"
              break;
            default: message = "Erreur de connexion"
              break;
          }
          this._snackbar.open(message, "OK", { duration: 2000 })
          return next.handle(modifiedReq)
        })
      )
    }


    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
