import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { FacebookUserModel } from "../../models/facebook-login";

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class FacebookLoginService {
    FB_APP_ID: number = 826720427470540;

    constructor(public http: Http, private fb: Facebook, private ns: NativeStorage) {
        fb.browserInit(this.FB_APP_ID, "v2.8");
    }

    doFacebookLogin() {
        let env = this;

        return new Promise<FacebookUserModel>((resolve, reject) => {
            //["public_profile"] is the array of permissions, you can add more if you need
            this.fb.login(["public_profile"]).then(function (response:FacebookLoginResponse) {
                //Getting name and gender properties
                this.fb.api("/me?fields=name,gender", [])
                    .then(function (user) {
                        //now we have the users info, let's save it in the NativeStorage
                        env.setFacebookUser(user)
                            .then(function (res) {
                                resolve(res);
                            });
                    })
            }, function (error) {
                reject(error);
            });
        });
    }

    doFacebookLogout() {
        return new Promise((resolve, reject) => {
            this.fb.logout()
                .then(function (res) {
                    //user logged out so we will remove him from the NativeStorage
                    this.ns.remove('facebook_user');
                    resolve();
                }, function (error) {
                    reject();
                });
        });
    }

    getFacebookUser() {
        return this.ns.getItem('facebook_user');
    }

    setFacebookUser(user: any) {
        return new Promise<FacebookUserModel>((resolve, reject) => {
            this.getFriendsFakeData()
                .then(data => {
                    resolve(this.ns.setItem('facebook_user',
                        {
                            userId: user.id,
                            name: user.name,
                            gender: user.gender,
                            image: "https://graph.facebook.com/" + user.id + "/picture?type=large",
                            friends: data.friends,
                            photos: data.photos
                        })
                    );
                });
        });
    }

    getFriendsFakeData(): Promise<FacebookUserModel> {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(response => response.json() as FacebookUserModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
