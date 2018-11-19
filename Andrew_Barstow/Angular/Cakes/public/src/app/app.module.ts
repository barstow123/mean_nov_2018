import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CakeService } from './cake.service';
import { CakeProfileComponent } from './cake-profile/cake-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
