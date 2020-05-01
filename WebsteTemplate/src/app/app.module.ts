import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from "ngx-dropdown";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CardsComponent } from './cards/cards.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
 import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FreeMembersComponent } from './free-members/free-members.component';
import { PremiumPlansComponent } from './premium-plans/premium-plans.component';
import { HappyStoriesComponent } from './happy-stories/happy-stories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
  


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    CardsComponent,
    FooterComponent,
     SearchComponent,
    routingComponents,
    HomeComponent,
    FreeMembersComponent,
    PremiumPlansComponent,
    HappyStoriesComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
