import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'
import { Placement } from "../../models/placement";

@IonicPage()
@Component({
  selector: 'page-reading-houses',
  templateUrl: 'reading-houses.html',
})
export class ReadingHousesPage {
  reading
  parent

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
  }

  showHouse(house) {
    this.parent.navCtrl.push('HousePage', { item: house })
  }

  ionViewWillEnter() {
    this.parent.title = 'Houses'
  }

}
