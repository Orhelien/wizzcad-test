import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ActiveRouteLogged } from './core/active-route';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ViewOneComponent } from './home/view-one/view-one.component';

export const routes: Routes = [

  // List of data
  { path: '', component: HomeComponent, canActivate: [ActiveRouteLogged] },

  // Log In | Out
  { path: 'login', component: LoginComponent },

  // View one data
  { path: 'json', component: ViewOneComponent },

  // 404 & Redirection
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }