import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Paginas
import * as page from '../pages';

// Components
import * as components from "../components";
 
// Services
import * as services from "../services"

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
    page.HomePage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    page.HomePage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    services.FacebookLoginService,
    services.GoogleLoginService
  ]
})
export class AppModule { }
