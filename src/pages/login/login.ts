import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

// import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
 import { SignupPage, ForgotPasswordPage } from '../';

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
    public loadingCtrl: LoadingController
  ) {
    // this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin(){
    // this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();
  }


  goToSignup() {
    debugger;
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    debugger;
    this.nav.push(ForgotPasswordPage);
  }
}
