import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { AddOnsComponent } from './add-ons/add-ons.component';
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
    //AddOnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
