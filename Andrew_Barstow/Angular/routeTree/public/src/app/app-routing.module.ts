import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CategoryComponent } from './products/category/category.component';
import { DetailsComponent } from './products/details/details.component';
import { BrandComponent } from './products/brand/brand.component';
import { ReviewsDetailsComponent } from './reviews/details/details.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'details/:id', component: DetailsComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }] },
  { path: 'reviews', component: ReviewsComponent, children: [
    {path: 'details/:id', component: ReviewsDetailsComponent },
    {path: 'author/:id', component: AuthorComponent },
    {path: 'all', component: AllComponent }
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
