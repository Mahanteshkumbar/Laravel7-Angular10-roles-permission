import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './auth/store/auth.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular UI By Mahantesh Kumbar';
  isAuthnoticated : Observable<State>; 

  constructor(private store: Store<AuthState>){}

  ngOnInit(): void {
        this.isAuthnoticated = this.store.select('authState');
  }
}
