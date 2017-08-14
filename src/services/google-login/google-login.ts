import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { GoogleUserModel } from "../../models/google-login";

@Injectable()
export class GoogleLoginService {

  webClientId: string = "1001905109734-cnkoa7unjev55lii0rftbfm0kvb37gqr.apps.googleusercontent.com";

  constructor(public http: Http, private gp: GooglePlus, private ns: NativeStorage) { }

  trySilentLogin() {
    //checks if user is already signed in to the app and sign them in silently if they are.
    let env = this;
    return new Promise<GoogleUserModel>((resolve, reject) => {
      this.gp.trySilentLogin({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': this.webClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
        .then((user) => {
          env.setGoogleUser(user)
            .then((res) => {
              resolve(res);
            });
        }, (error) => {
          reject(error);
        });
    });
  }

  doGoogleLogin() {
    let env = this;
    return new Promise<GoogleUserModel>((resolve, reject) => {
      this.gp.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': this.webClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
        .then((user) => {
          env.setGoogleUser(user)
            .then((res) => {
              resolve(res);
            });
        }, (error) => {
          reject(error);
        });
    });
  }

  doGoogleLogout() {
    return new Promise((resolve, reject) => {
      this.gp.logout()
        .then((response) => {
          //user logged out so we will remove him from the NativeStorage
          (new NativeStorage).remove('google_user');
          resolve();
        }, (error) => {
          reject(error);
        });
    });
  }

  getGoogleUser() {
    return this.ns.getItem('google_user');
  }

  setGoogleUser(user: any) {
    return new Promise<GoogleUserModel>((resolve, reject) => {
      this.getFriendsFakeData()
        .then(data => {
          resolve((new NativeStorage).setItem('google_user',
            {
              userId: user.userId,
              name: user.displayName,
              email: user.email,
              image: user.imageUrl,
              friends: data.friends,
              photos: data.photos
            })
          );
        });
    });
  }

  getFriendsFakeData() {
    return this.http.get('./assets/example_data/social_integrations.json')
      .toPromise()
      .then(response => response.json() as GoogleUserModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
