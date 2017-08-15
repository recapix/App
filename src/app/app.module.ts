import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from '@angular/http';

import { MyApp } from "./app.component";

// Paginas
import * as page from "../pages";

// Components
import * as components from "../components";

@NgModule({
  declarations: [
    components.BackgroundImage,
    components.ColorRadio,
    components.CounterInput,
    components.GoogleMap,
    components.PreloadImage,
    components.Rating,
    components.ShowHideContainer,
    components.ShowHideInput,
    page.ForgotPasswordPage,
    page.HomePage,
    page.LoginPage,
    page.PrivacyPolicyPage,
    page.SignupPage,
    page.TermsOfServicePage,
    page.WalkthroughPage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    page.ForgotPasswordPage,
    page.HomePage,
    page.LoginPage,
    page.PrivacyPolicyPage,
    page.SignupPage,
    page.TermsOfServicePage,
    page.WalkthroughPage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
