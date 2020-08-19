import { RouterModule, Routes } from '@angular/router';
import { PortalDeNoticiasComponent } from './pages/portal-de-noticias/portal-de-noticias.component';
import { MainComponent } from './pages/main/main.component';
import { WorkingComponent } from './pages/working/working.component';
import {NewsDetailComponent} from './pages/portal-de-noticias/components/news-detail/news-detail.component';

const APP_ROUTES: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'portal-de-noticias', component: PortalDeNoticiasComponent},
  {path: 'noticias/:id', component: NewsDetailComponent},
  {path: 'working', component: WorkingComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
