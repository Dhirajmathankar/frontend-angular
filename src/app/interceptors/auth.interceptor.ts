import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // convert Promise to Observable
    return from(this.auth.getAccessToken()).pipe(
      switchMap(token => {
        let cloned = req;
        if (token) {
          cloned = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
        }
        return next.handle(cloned).pipe(
          catchError((error: any) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              // attempt refresh once
              return from(this.auth.refreshAccessToken()).pipe(
                switchMap((newToken) => {
                  if (newToken) {
                    const retry = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
                    return next.handle(retry);
                  }
                  return throwError(() => error);
                })
              );
            }
            return throwError(() => error);
          })
        );
      })
    );
  }
}
