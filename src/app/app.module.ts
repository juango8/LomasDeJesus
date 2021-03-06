import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Rutas
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
import { PortalNavbarComponent } from './pages/portal-de-noticias/components/portal-navbar/portal-navbar.component';
import { SeccionesComponent } from './pages/portal-de-noticias/components/secciones/secciones.component';
import { FilterSidebarComponent } from './pages/portal-de-noticias/components/filter-sidebar/filter-sidebar.component';
import { NewsViewsComponent } from './pages/portal-de-noticias/components/news-views/news-views.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsTemplateComponent } from './pages/portal-de-noticias/components/news-template/news-template.component';
import { DisplayNewsComponent } from './pages/portal-de-noticias/components/display-news/display-news.component';
import { WorkingComponent } from './pages/working/working.component';
import { NewsDetailComponent } from './pages/portal-de-noticias/components/news-detail/news-detail.component';


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
    MainComponent,
    PortalNavbarComponent,
    SeccionesComponent,
    FilterSidebarComponent,
    NewsViewsComponent,
    NewsTemplateComponent,
    DisplayNewsComponent,
    WorkingComponent,
    NewsDetailComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
