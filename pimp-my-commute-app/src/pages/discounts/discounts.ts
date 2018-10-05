import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-discounts',
  templateUrl: 'discounts.html'
})
export class DiscountsPage {

  constructor(public nav: NavController) {
  }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
