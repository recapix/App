import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { StorageService } from "../../services";
import { HomePage, ProfilePage, SearchPage, SettingsPage, WalkthroughPage } from '../';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;

  constructor(public navCtrl: NavController,
    private AppStorage: StorageService) {
    AppStorage.get("auth.user")
      .then((value: any) => {
        if (value == null) {
          this.navCtrl.setRoot(WalkthroughPage);
        }

        this.tab1Root = HomePage;
        this.tab2Root = SearchPage;
        this.tab3Root = ProfilePage;
        this.tab4Root = SettingsPage;
      });  

  }
}
