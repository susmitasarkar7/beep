import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', loadChildren: './pages/login-page/login-page.module#LoginPagePageModule' },
  { path: 'register-page', loadChildren: './pages/register-page/register-page.module#RegisterPagePageModule' },
  { path: 'inbox-page', loadChildren: './pages/inbox-page/inbox-page.module#InboxPagePageModule' },
  { path: 'channels-page', loadChildren: './pages/channels-page/channels-page.module#ChannelsPagePageModule' },
  { path: 'profile-page', loadChildren: './pages/profile-page/profile-page.module#ProfilePagePageModule' },
  { path: 'tabs-page', loadChildren: './pages/tabs-page/tabs-page.module#TabsPagePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
