import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(public navCtrl: NavController, private toast: ToastController, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  goRegisterPage() {
    this.navCtrl.navigateRoot('register-page');
  }

  goTabsPage() {
    this.navCtrl.navigateRoot('tabs-page');
  }
  

  async login() {
    const { email, password } = this
    try {
      const result = await
        this.afAuth.auth.signInWithEmailAndPassword(email , password);
      const toast = await this.toast.create({
        message: "Account successfully loged in.",
        duration: 3000
      });
      toast.present();
      console.log(result);
    }
    catch (e) {
      console.error(e);
      const toast = await this.toast.create({
        message: e.message,
        duration: 3000
      });
      toast.present();
    }
  }
}
