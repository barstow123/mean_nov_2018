import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { AddOnsComponent } from './add-ons/add-ons.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  /*{ path: 'alpha',component: AlphaComponent },
  { path: 'beta',component: BetaComponent },
  { path: 'gamma/:id', component: GammaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },

  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    //AddOnsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
