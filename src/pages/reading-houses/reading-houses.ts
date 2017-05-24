import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'
import { Placement } from "../../models/placement";
import { Reading } from "../../models/reading";
import { ReadingPage } from "../reading/reading";

@IonicPage()
@Component({
  selector: 'page-reading-houses',
  templateUrl: 'reading-houses.html',
})
export class ReadingHousesPage {
  reading
  parent

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let parent = navParams.get('parent')

    if (parent) {
      this.parent = parent
      this.reading = parent.reading
    } else {
      this.parent = this
      this.reading = new Reading(navParams.data)
    }
  }

  showPlacement(placement) {
    this.parent.navCtrl.push('PlacementPage', { placement: placement })
  }

  ionViewWillEnter() {
    this.parent.title = 'Placements'
  }

}
