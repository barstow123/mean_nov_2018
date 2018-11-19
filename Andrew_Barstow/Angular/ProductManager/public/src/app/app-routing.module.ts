import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, },
  { path: 'products/edit', component: EditProductComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/view/:id', component: ViewProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
