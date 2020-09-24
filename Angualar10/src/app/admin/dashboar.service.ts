import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboarService {
  constructor(private http: HttpClient) { }
  // getUsers():Observable<any>{
  //   return this.http.get('http://localhost/php%20practice/adminDash/public/api/users');
  // } 

  getUserDetails():Observable<any>{
    return this.http.get('http://localhost/php%20practice/adminDash/public/api/profile');
  }
  
  getUserLogsDetailsWithPagination(url: any):Observable<any>{
    return this.http.get(url);
  }
  
  logOutUser(user_id):Observable<any>{
    return this.http.post('http://localhost/php%20practice/adminDash/public/api/logout',{'user_id':user_id});
  }

  // updateProfile(profile, headers):Observable<any>{
  //     return this.http.post('http://localhost/php%20practice/adminDash/public/api/profile', profile, {
  //     headers: headers});
  // }

  updateProfile(profile):Observable<any>{
    return this.http.post('http://localhost/php%20practice/adminDash/public/api/profile', profile);
  }
}
