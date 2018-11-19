import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsDetailsComponent } from './reviews/details/details.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailsComponent } from './products/details/details.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    PageNotFoundComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    AuthorComponent,
    AllComponent,
    ReviewsDetailsComponent,
    HomeComponent,
    EditProductComponent,
    NewProductComponent,
    ViewProductComponent,
    //AddOnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
