import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CategoriesComponent,
    ClientsComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsDetailsComponent,
    UsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
