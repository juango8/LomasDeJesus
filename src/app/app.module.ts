import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OportunitiesComponent } from './components/oportunities/oportunities.component';
import { ValuesComponent } from './components/values/values.component';
import { SocialComponent } from './components/gallery/social/social.component';
import { NatureComponent } from './components/gallery/nature/nature.component';
import { WorksComponent } from './components/gallery/works/works.component';
import { SafePlaceComponent } from './components/safe-place/safe-place.component';
import { SeaFriendsComponent } from './components/sea-friends/sea-friends.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    AboutComponent,
    HomeComponent,
    OportunitiesComponent,
    SocialComponent,
    NatureComponent,
    WorksComponent,
    ValuesComponent,
    SafePlaceComponent,
    SeaFriendsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
