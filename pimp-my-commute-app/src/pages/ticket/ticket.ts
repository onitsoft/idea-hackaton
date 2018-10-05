import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DogeGamePage} from "../doge-game/doge-game";
import {HomePage} from "../home/home";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public navController: NavController) {
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
