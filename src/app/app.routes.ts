import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
export const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'signin', component: SigninComponent }
];
