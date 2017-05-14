import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-placement',
  templateUrl: 'placement.html',
})
export class PlacementPage {

  placement

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.placement = navParams.get('placement')
  }

  showTetragram(tetragram) {
    this.navCtrl.push('TetragramPage', { tetragram: tetragram })
  }

  showHouse(house) {
    this.navCtrl.push('HousePage', { house: house })
  }

}
