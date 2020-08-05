import { RouterModule, Routes } from '@angular/router';
import { PortalDeNoticiasComponent } from './pages/portal-de-noticias/portal-de-noticias.component';
import { MainComponent } from './pages/main/main.component';

const APP_ROUTES: Routes = [
    { path: 'portal-de-noticias', component: PortalDeNoticiasComponent },
    { path: 'main', component: MainComponent },
    { path: '**', pathMatch:'full', redirectTo: 'main' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });    