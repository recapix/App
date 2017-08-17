import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { LoginPage, SignupPage } from '../';

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html'
})
export class WalkthroughPage {
  constructor(public nav: NavController) { }

  lastSlide = false;

  @ViewChild('slider') slider: any;

  get pageSlider() {
    return this.slider;
  };

  skipIntro() {
    this.lastSlide = true;
    var maxItemLength = this.pageSlider.length();
    this.pageSlider.slideTo(maxItemLength);
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.pageSlider.isEnd();
  }

  goToLogin() {
    console.log("Navigate to LoginPage");
    this.nav.push(LoginPage);
  }

  goToSignup() {
    console.log("Navigate to SignupPage");
    this.nav.push(SignupPage);
  }
}
