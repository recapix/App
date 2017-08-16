import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import filter from 'lodash-es/filter';

import { AngularFireAuth } from 'angularfire2/auth';




@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public user: any;

    constructor(public navCtrl: NavController,
        private afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            debugger;
            if (!user) {
                this.user = null;
                return;
            }
            this.user = {
                name: user.email,
                uid: user.uid
            };
        });
    }
}
