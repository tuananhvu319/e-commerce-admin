import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './components/main-content/main-content.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {CreateUserComponent} from './components/create-user/create-user.component';
import {CreateProductComponent} from './components/create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'products/all-products',
    component: AllProductsComponent
  },
  {
    path: 'users',
    component: AllUsersComponent
  },
  {
    path: 'users/create',
    component: CreateUserComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
