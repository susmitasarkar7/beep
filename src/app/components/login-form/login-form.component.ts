import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from "../../pages/models/account/account.interface";
import { LoginResponse } from 'src/app/pages/models/login/login-response.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(public navCtrl: NavController, private toast: ToastController, private afAuth: AngularFireAuth) { 
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  ngOnInit() {}

  goRegisterPage() {
    this.navCtrl.navigateRoot('register-page');
  }

  goTabsPage() {
    this.navCtrl.navigateRoot('tabs-page');
  }
  

  async login() {
    try {
      let res = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      const result: LoginResponse = { 
        result: {email: res.user.email, uid: res.user.uid}
      }
      this.loginStatus.emit(result);
      console.log(result);
    }
    catch (e) {

      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
      console.error(e);
      
    }
  }
}
