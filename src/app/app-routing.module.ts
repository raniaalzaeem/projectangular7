import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CatugaryComponent } from './catugary/catugary.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'post', component: AboutusComponent },
  { path: 'catugary', component: CatugaryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'dashbord', component: DashbordComponent },
 // { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
