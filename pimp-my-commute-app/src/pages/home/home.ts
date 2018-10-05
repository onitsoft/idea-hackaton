import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    dropOff: "Frankfurt Flughafen (FRA)",
    pickup: "Vallendar",
    date: new Date().toISOString()
  };

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    this.search.dropOff = "Frankfurt Flughafen (FRA)";
    this.search.pickup = "Vallendar Bahnhof";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.pickup = "Vallendar Bahnhof";
      } else {
        this.search.pickup = val;
      }
    }).catch((err) => {
      console.log(err)
    });

    this.storage.get('dropoff').then((val) => {
      if (val === null) {
        this.search.dropOff = "Frankfurt Flughafen (FRA)";
      } else {
        this.search.dropOff = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
