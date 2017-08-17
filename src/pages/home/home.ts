import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import filter from "lodash-es/filter";

import { AngularFireAuth } from "angularfire2/auth";

import { StorageService } from "../../services";

import { WalkthroughPage } from "../";

import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {
    public user: FirebaseObjectObservable<any>;

    constructor(public navCtrl: NavController,
        private afAuth: AngularFireAuth,
        private AppStorage: StorageService,
        private db: AngularFireDatabase) {
        AppStorage.get("auth.user")
            .then((value:any) => {
                if (value == null) {
                    this.navCtrl.setRoot(WalkthroughPage);
                }
                debugger;
              this.user = this.db.object(`/profile/${value.uid}/user`)
            });

        // afAuth.authState.subscribe(user => {
        //     debugger;
        //     if (!user) {
        //         this.user = null;
        //         return;
        //     }
        //     this.user = {
        //         name: user.email,
        //         uid: user.uid
        //     };
        // });
    }
}
