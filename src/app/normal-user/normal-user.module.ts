import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalUserRoutingModule } from './normal-user-routing.module';

// Components
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './sections/hero-banner/hero-banner.component';
import { QuickAccessComponent } from './sections/quick-access/quick-access.component';
import { VendorCarouselComponent } from './sections/vendor-carousel/vendor-carousel.component';
import { VendorCardComponent } from './cards/vendor-card/vendor-card.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { BlogAndReviewsComponent } from './sections/blog-and-reviews/blog-and-reviews.component';
import { BlogCardComponent } from './cards/blog-card/blog-card.component';
import { FooterComponent } from './footer/footer.component';

// This is the "container" component, we'll create it to host the full page layout
import { HomeComponent } from './home/home.component';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import * as allIcons from 'lucide';
import { SliderBarHomeComponent } from './slider-bar-home/slider-bar-home.component';
import { HomePageFilterComponent } from './home-page-filter/home-page-filter.component';
import { HomePageCardInfoComponent } from './home-page-card-info/home-page-card-info.component';
import { FestivalPlaningAnalyticsComponent } from './festival-planing-analytics/festival-planing-analytics.component';
import { WhatOurClientSayComponent } from './what-our-client-say/what-our-client-say.component';
import { FestivalPlaningResourcesComponent } from './festival-planing-resources/festival-planing-resources.component'; 

const icons = Object.entries(allIcons).reduce((acc, [key, value]) => {
  if (typeof value === 'object') {
    acc[key] = value as LucideIconData;
  }
  return acc;
}, {} as Record<string, LucideIconData>);


@NgModule({
  declarations: [
    HeaderComponent,
    HeroBannerComponent,
    QuickAccessComponent,
    VendorCarouselComponent,
    VendorCardComponent,
    HowItWorksComponent,
    BlogAndReviewsComponent,
    BlogCardComponent,
    FooterComponent,
    HomeComponent,
    SliderBarHomeComponent,
    HomePageFilterComponent,
    HomePageCardInfoComponent,
    FestivalPlaningAnalyticsComponent,
    WhatOurClientSayComponent,
    FestivalPlaningResourcesComponent, // The component that will render the full page UI
  ],
  imports: [
    CommonModule,
    NormalUserRoutingModule,
    LucideAngularModule.pick(icons),
  ]
})
export class NormalUserModule { }