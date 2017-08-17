import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { HomePage, SignupPage, ForgotPasswordPage } from '../';

import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from "../../services";

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
    public afAuth: AngularFireAuth,
    private appStorage: StorageService
  ) {

    this.main_page = { component: HomePage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin() {
    this.showLoading();
    this.afAuth.auth
      .signInWithEmailAndPassword(this.login.value.email, this.login.value.password)
      .then(resolve => { 
        this.appStorage.set("auth.user", { uid: resolve.uid, email: resolve.email }).then(() => {
          this.loading.dismiss();
          debugger;
          this.nav.setRoot(this.main_page.component);
        });
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

  showLoading(){    
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

}
