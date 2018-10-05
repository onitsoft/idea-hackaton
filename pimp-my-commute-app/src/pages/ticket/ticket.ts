import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DogeGamePage} from "../doge-game/doge-game";
import {HomePage} from "../home/home";
import {TripService} from "../../services/trip-service";

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  // trip data
  public trip: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();


  constructor(public navCtrl: NavController, public navParams: NavParams, public navController: NavController, public tripService: TripService) {
    this.trip = tripService.getItem(1);
  }

  GoToGame(){
    this.navController.setRoot(DogeGamePage);
  }
  GoHome(){
    this.navController.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');



  }

}
