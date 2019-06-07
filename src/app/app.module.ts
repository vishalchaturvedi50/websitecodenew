import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from "ngx-img-carousel";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { AboutComponent } from './about/about.component';
import { TechskillComponent } from './techskill/techskill.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { HobbyComponent } from './hobby/hobby.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    AboutComponent,
    TechskillComponent,
    WorkComponent,
    EducationComponent,
    HobbyComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
