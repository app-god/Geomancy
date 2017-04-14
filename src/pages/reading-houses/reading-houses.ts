import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReadingHousesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reading-houses',
  templateUrl: 'reading-houses.html',
})
export class ReadingHousesPage {
  reading
  tetragrams

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reading = navParams.data
    this.tetragrams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((houseIndex) => {
      return this.reading.getTetragramForHouse(houseIndex)
    })
  }

}
