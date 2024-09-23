import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: ' ',component: HomeComponent},
    {path: 'product',component: ProductComponent},
    {path:'login',component: LoginComponent},
    {path:'signup',component: SignupComponent}
];