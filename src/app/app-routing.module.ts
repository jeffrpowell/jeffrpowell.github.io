import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'whois', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) }, 
  { path: 'tech', loadChildren: () => import('./tech/tech.module').then(m => m.TechModule) }, 
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }, 
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {
    path: '',
    redirectTo: 'whois',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
