import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { HomePage, SignupPage, ForgotPasswordPage } from '../';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth
  ) {
    this.loading = this.loadingCtrl.create();

    this.main_page = { component: HomePage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin() {
    this.loading.present();
    this.afAuth.auth
      .signInWithEmailAndPassword(this.login.value.email, this.login.value.password)
      .then(() => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      })
      .catch((a: any) => {
        this.loading.dismiss();
        var msg = "";
        switch (a.code) {
          case "auth/user-not-found":
            msg = "User not found";
            break;
          default:

            break;
        }
        debugger;
        let alert = this.alertCtrl.create({
          title: 'Auth Error',
          subTitle: msg,
          buttons: ['Close']
        });
        alert.present();
      });
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }
}
