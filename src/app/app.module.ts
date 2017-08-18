import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { NativeStorage } from "@ionic-native/native-storage";
import { HttpModule } from '@angular/http';

import { MyApp } from "./app.component";

// Paginas
import * as page from "../pages";

// Components
import * as components from "../components";

// Firebase
import { environment } from "./app.environment"; 
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { FirebaseProvider } from "./../providers/firebase/firebase";
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services
import { StorageService } from "../services";

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
    page.ProfilePage,
    page.SearchPage,
    page.SettingsPage,
    page.SignupPage,
    page.TabsNavigationPage,
    page.TermsOfServicePage,
    page.WalkthroughPage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    page.ForgotPasswordPage,
    page.HomePage,
    page.LoginPage,
    page.PrivacyPolicyPage,
    page.ProfilePage,
    page.SearchPage,
    page.SettingsPage,
    page.SignupPage,
    page.TabsNavigationPage,
    page.TermsOfServicePage,
    page.WalkthroughPage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    StorageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
