import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HousePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.house = this.navParams.get('house')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousePage');
  }

}
