import { Component } from "@angular/core";
import { NavController, ModalController, LoadingController, AlertController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { TermsOfServicePage } from "../terms-of-service/terms-of-service";
import { PrivacyPolicyPage } from "../privacy-policy/privacy-policy";
import { HomePage } from '../';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: "ib-signup-page",
  templateUrl: "signup.html"
})
export class SignupPage {
  signup: FormGroup;
  loading: any;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
  ) {

    this.signup = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("test", Validators.required),
      confirm_password: new FormControl("test", Validators.required)
    });
  }

  doSignup() {
    this.afAuth.auth
      .createUserWithEmailAndPassword(this.signup.value.email, this.signup.value.password)
      .then(() => {
          this.nav.setRoot(HomePage);
      })
      .catch((e: any) => {
           let alert = this.alertCtrl.create({
                    title: 'Auth Error',
                    subTitle: e.message,
                    buttons: ['Close']
                });
          alert.present();
      });

  }

  doFacebookSignup() {
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

}
