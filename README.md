# Laravel7-Angular10-roles-permission Uses Laravel api sanctum package(Role Based Login)
This is a Laravel 7.X(Sanctum API Package) and Angular 10 starter project with roles-permissions management based on Spatie Laravel-permission package, Bootstrap Material Design.

## Angular 10 NGRx for login and Laravel 7.x Sanctum Package token based User Authentications For Beginner

This is a Angular 8.* and Laravel 6.X admin panel starter project with Token based authentication, Angular Lazyloading, Server Side Error handling, Reactive Forms and Laravel CORS managing.

# Installation AdminDash
It is a full Laravel project that you should use as a starter project and implement your own functions.

* Clone the repository with git clone
* Copy .env.example file to .env and edit database credentials there
* Run `composer install`
* Run `php artisan key:generate`
* Run `composer require laravel/sanctum`
* Run `php artisan migrate`
* Run `php artisan db:seed`
* Run `php artisan passport:install`
* That's it: http://localhost/adminDash/public/api/(Run on any localhost server)
* In my setup: http://localhost/php%20practice/adminDash/public/api/register(Auth.service.ts and Dashboard.service.ts). Change Api services in Angular10 application accordingly)

[Laravel Sanctum Package](https://laravel.com/docs/7.x/sanctum)

# Installation AngularUI
It is a full Laravel project that you should use as a starter project and implement your own functions.

* Clone the repository with git clone
* Install NodeJs from NodeJs Official Page.
* Open Terminal
* Go to your file project
* Make sure you have installed Angular CLI already. If not, please install.
* Run in terminal: npm install
* Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Login with ngRx
* Store - RxJS powered global state management for Angular apps, inspired by Redux.
* Effects - Side effect model for @ngrx/store.
* Router Store - Bindings to connect the Angular Router to @ngrx/store.
* Actions

[NgRx](https://ngrx.io/docs)

# Login Details
Admin: admin@admin.com Password: password(For more details check database/seeder/UserSeeder)

User: user@user.com Password:password(For more details check database/seeder/UserSeeder)

# Home Page
![picture alt](https://github.com/Mahanteshkumbar/Laravel7-Angular10-roles-permission/blob/master/screens/login.PNG)

# Login
![picture alt](https://github.com/Mahanteshkumbar/Laravel7-Angular10-roles-permission/blob/master/screens/register.PNG)

# Dashboard Admin
![picture alt](https://github.com/Mahanteshkumbar/Laravel7-Angular10-roles-permission/blob/master/screens/dashboard.PNG)

# Dashboard Normal User
![picture alt](https://github.com/Mahanteshkumbar/Laravel7-Angular10-roles-permission/blob/master/screens/user.PNG)
