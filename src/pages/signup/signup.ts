import { Component } from "@angular/core";
import { NavController, ModalController, LoadingController, AlertController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { TermsOfServicePage } from "../terms-of-service/terms-of-service";
import { PrivacyPolicyPage } from "../privacy-policy/privacy-policy";
import { HomePage } from '../';

import { AngularFireAuth } from 'angularfire2/auth';
import { NativeStorage } from "@ionic-native/native-storage";

@Component({
  selector: "ib-signup-page",
  templateUrl: "signup.html"
})
export class SignupPage {
  signup: FormGroup;
  loading: any;
  main_page: { component: any };

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    private nstorage: NativeStorage
  ) {
    this.main_page = { component: HomePage };
    this.signup = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirm_password: new FormControl("", Validators.required)
    });
  }

  doSignup() {
    this.showLoading();
    this.afAuth.auth
      .createUserWithEmailAndPassword(this.signup.value.email, this.signup.value.password)
      .then((resolve) => {
        this.nstorage.setItem("auth-user", { uid: resolve.uid, email: resolve.email }).then(() => {
          this.nav.setRoot(this.main_page.component); 
        });
      })
      .catch((e: any) => {
        let alert = this.alertCtrl.create({
          title: 'Authentication error!',
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

  showLoading(){    
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}
