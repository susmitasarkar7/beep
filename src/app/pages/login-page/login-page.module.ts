import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavController } from '@ionic/angular';
import { AngularFireAuthModule } from "angularfire2/auth";

import { LoginPagePage } from './login-page.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AngularFireAuthModule
  ],
  declarations: [LoginPagePage]
})
export class LoginPagePageModule {

  // constructor(private navCtrl: NavController) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

}

