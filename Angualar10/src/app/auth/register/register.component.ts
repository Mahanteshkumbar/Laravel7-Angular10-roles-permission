import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  serverErrors: null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.required])
    })
  }
  get name(){ return this.registerForm.get('name') }
  get email(){ return this.registerForm.get('email')}
  get password(){ return this.registerForm.get('password') }

  registerUser(){
    this.authService.getUser(this.registerForm).subscribe(
      (response) => {         
        console.log(response); 
       // localStorage.removeItem('token');
        //set bearer token
        localStorage.clear();
        localStorage.setItem('token',response.access_token);
        
        localStorage.setItem('user_id',response.user.id);
        //get the role of users
        localStorage.setItem('roles',response.role);
      },(err) => { 
        this.serverErrors = err.error;
        console.log(err);
        console.log(err.error.errors); 
      });
      //console.log(this.registerForm.value);    
  }
}
