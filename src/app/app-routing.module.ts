import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'displayProduct', component: DisplayProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
