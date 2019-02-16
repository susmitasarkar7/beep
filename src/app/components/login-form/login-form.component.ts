import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPagePage } from 'src/app/pages/register-page/register-page.page';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  goRegisterPage() {
    this.navCtrl.navigateRoot('register-page');
  }

  goTabsPage() {
    this.navCtrl.navigateRoot('tabs-page');
  }
  
}
