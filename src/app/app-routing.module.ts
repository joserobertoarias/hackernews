
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/all-news/all-news.module').then(m => m.AllNewsModule) },
  { path: 'my-faves', loadChildren: () => import('./components/my-faves/my-faves.module').then(m => m.MyFavesModule) },
  { path: 'all-news', loadChildren: () => import('./components/all-news/all-news.module').then(m => m.AllNewsModule) },
  { path: "**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
