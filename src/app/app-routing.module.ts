import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: 'products/create', component: ProductsCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
