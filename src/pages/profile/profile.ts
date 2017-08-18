import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { StorageService } from "../../services";
import { WalkthroughPage } from "../";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Component({
    selector: "page-profile",
    templateUrl: "profile.html"
})
export class ProfilePage {  
    public profile: FirebaseObjectObservable<any>;    
        constructor(public navCtrl: NavController,
            private AppStorage: StorageService,
            private db: AngularFireDatabase) {
            AppStorage.get("auth.user")
                .then((value:any) => {
                    if (value == null) {
                        this.navCtrl.setRoot(WalkthroughPage);
                    }
                    debugger;
                  this.profile = this.db.object(`/profile/${value.uid}`)
                });
        }
    }
    