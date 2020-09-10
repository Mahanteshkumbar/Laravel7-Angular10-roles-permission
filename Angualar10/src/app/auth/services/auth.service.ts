import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getUser(form): Observable<any>{
    console.log(form.value);
    return this.http.post('http://localhost/php%20practice/adminDash/public/api/register',form.value);
  }

  getLogin(form): Observable<any>{
    console.log(form.value);
    return this.http.post('http://localhost/php%20practice/adminDash/public/api/login',form.value);
  }
}
