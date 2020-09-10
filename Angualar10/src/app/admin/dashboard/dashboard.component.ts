import { Component, OnInit } from '@angular/core';
import { DashboarService } from '../dashboar.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authService: DashboarService, private router: Router, private store: Store<AuthState>) { }
  token = localStorage.getItem('token');
  userDetails;

  ngOnInit(): void{
    this.authService.getUserDetails().subscribe(
      response => { 
        console.log("Admin",response);
        this.userDetails = response;
      },err => { 
        console.log("Admin",err);
    });
  }

  getUser(): void{
    // this.authService.getUsers().subscribe(
    //   response => { console.log(response)},
    //   err => { console.log(err);}
    // )

    // this.authService.getUserDetails().subscribe(
    //   response => { 
    //     console.log("Admin",response);
    //     this.userDetails = response;
    //   },err => { 
    //     console.log("Admin",err);
    // });
  }

  logout(): void{
    let token = localStorage.getItem('token');
    let user_id = localStorage.getItem('user_id');
    console.log(token+" "+user_id);
    this.authService.logOutUser(user_id).subscribe(
      response => { 
        console.log(response); 
        localStorage.clear();
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/login']);        
      },
      err => { console.log(err); }
    )
  }
}
