import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { AboutComponent } from './about/about.component';
import { TechskillComponent } from './techskill/techskill.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    AboutComponent,
    TechskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
