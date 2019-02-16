import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPagePage,
    children: [
      {
        path: 'inbox-page',
        loadChildren: './pages/inbox-page/inbox-page.module#InboxPagePageModule'
      },
      {
        path: 'channels-page',
        loadChildren: './pages/channels-page/channels-page.module#ChannelsPagePageModule'
      },
      {
        path: 'profile-page',
        loadChildren: './pages/profile-page/profile-page.module#ProfilePagePageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/inbox-page',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
