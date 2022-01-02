import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'whois', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: 'tech', loadChildren: () => import('./tech/tech.module').then(m => m.TechModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: '**', redirectTo: 'whois', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
