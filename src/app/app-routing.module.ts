import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing-pages'},
  {path: 'landing-pages', loadChildren: './landing-pages/landing-pages.module#LandingPagesModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingComponents = [];
