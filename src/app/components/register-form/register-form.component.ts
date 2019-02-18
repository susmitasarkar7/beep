import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
// import { Account } from "../../../models/account/account.interface";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  email: string = ""
  password: string = ""

  // account = {} as Account

  constructor(private toast: ToastController, private afAuth: AngularFireAuth) { }

  ngOnInit() { }

  async register() {
    const { email, password } = this
    try {
      const result = await
        this.afAuth.auth.createUserWithEmailAndPassword(email , password);
      const toast = await this.toast.create({
        message: "Account successfully created.",
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
