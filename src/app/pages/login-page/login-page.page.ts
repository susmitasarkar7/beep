import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LoginResponse } from '../models/login/login-response.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private toast: ToastController,private navCtrl: NavController) {

  }

  ngOnInit() {
  }

  async login(event: LoginResponse) {
    console.log(event);
    if(!event.error){
      const toast = await this.toast.create({
        message:`Welcome to Beep, ${event.result.email}`,
        duration: 3000
      });
      toast.present();
      this.navCtrl.navigateRoot('profile-page')
    }
    else {
      const toast = await this.toast.create({
        message: event.error.message,
        duration: 3000
      });
      toast.present();
    }
  }

}
