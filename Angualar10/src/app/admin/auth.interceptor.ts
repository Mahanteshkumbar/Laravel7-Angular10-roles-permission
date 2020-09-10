import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/app.reducers';
import { State } from '../auth/store/auth.reducers';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AuthState>) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = null;  
    
    //ngrx way
    return this.store.select('authState').pipe(
      take(1),
		  switchMap((authSate : State) =>{
        headers = new HttpHeaders({
          'Authorization' : `Bearer ${authSate.authToken}`,
        });
        const requestChange = request.clone({headers});
        console.log(requestChange);
        return next.handle(requestChange);
		  })
    );

    //normal auth steps
    // console.log(localStorage.getItem('token')+" "+localStorage.getItem('user_id'));
    // const token = localStorage.getItem('token');
    // headers = new HttpHeaders({
    //   //'Content-Type' : 'application/form-data; charset=UTF-8, application/json,',
    //   'Authorization' : `Bearer ${token}`,
    // });
    // const requestChange = request.clone({headers});  
    
    //request.clone({headers});    
    //return next.handle(requestChange);
  }
}
