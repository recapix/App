import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import * as lodash from "lodash-es/filter";
import { StorageService } from "../../services";
import { WalkthroughPage } from "../";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {

    constructor(public navCtrl: NavController,
        private AppStorage: StorageService,
        private db: AngularFireDatabase,
        private toastCtrl: ToastController) {

        AppStorage.get("auth.user")
            .then((value: any) => {
                if (value == null) {
                    this.navCtrl.setRoot(WalkthroughPage);
                }
                this.db.object(`/profile/${value.uid}/user`)
                    .subscribe((observer) => {
                        let toast = this.toastCtrl.create({
                            message: `Welcome ${observer.name}`,
                            showCloseButton: true,
                            closeButtonText: 'Ok'
                        });
                        toast.present();
                    });
            });

    }
}
