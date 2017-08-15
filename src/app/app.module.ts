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
import {
  BackgroundImage, ColorRadio, CounterInput, GoogleMap, PreloadImage, Rating, ShowHideContainer, ShowHideInput
} from "../components";

@NgModule({
  declarations: [
    BackgroundImage,
    ColorRadio,
    CounterInput,
    GoogleMap,
    PreloadImage,
    Rating,
    ShowHideContainer,
    ShowHideInput,
    page.HomePage,
    page.LoginPage,
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
    page.HomePage,
    page.LoginPage,
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
