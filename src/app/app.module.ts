import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

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
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortalDeNoticiasComponent } from './pages/portal-de-noticias/portal-de-noticias.component';
import { MainComponent } from './pages/main/main.component';

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
    OpinionsComponent,
    SeaFriendsComponent,
    ContactComponent,
    FooterComponent,
    PortalDeNoticiasComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
