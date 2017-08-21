import { Component } from "@angular/core";
import { NavController, SegmentButton, LoadingController } from "ionic-angular";
import { StorageService } from "../../services";
import { WalkthroughPage } from "../";
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
    selector: "profile-page",
    templateUrl: "profile.html"
})
export class ProfilePage {
    public display: string;
    public user: any;
    public posts: any;

    loading: any;

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        private AppStorage: StorageService,
        private db: AngularFireDatabase) {
        this.display = "grid";

        this.AppStorage.get("auth.user")
            .then((value: any) => {

                if (value == null) {
                    this.navCtrl.setRoot(WalkthroughPage);
                }

                this.db.object(`/profile/${value.uid}/user`)
                    .subscribe((item) => {
                        this.user = item;
                    });
                this.posts = this.db.list(`/profile/${value.uid}/posts`);
            });


    }
    goToFollowersList() {

    }

    goToFollowingList() {

    }

    goToEdit() {

    }

    onSegmentChanged(segmentButton: SegmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    }

    onSegmentSelected(segmentButton: SegmentButton) {
        // console.log('Segment selected', segmentButton.value);
    }

    showLoading() {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    }

    sharePost(post){
        console.log("Share Post ",post);
    }

}
