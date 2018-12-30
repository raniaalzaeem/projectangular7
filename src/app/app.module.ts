import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, 
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionModule,MatGridListModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
 import {MatPaginatorModule} from '@angular/material/paginator';
 import {MatSortModule} from '@angular/material/sort';
 import {MatSelectModule} from '@angular/material/select';
import { CatugaryComponent } from './catugary/catugary.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { HttpParams } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    ProductsComponent,
    NavComponent,
    CatugaryComponent,
    AboutusComponent,
    ContactusComponent,
   
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    HttpClientModule,
    // HttpParams
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
