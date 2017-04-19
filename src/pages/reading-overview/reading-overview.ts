import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  reading
  warnings = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reading = navParams.data

    let house1Tetragram = this.reading.getTetragramForHouse(1)
    if (house1Tetragram.name == 'Rubeus'
      || house1Tetragram.name == 'Cauda Draconis') {

      let message = house1Tetragram.name + ' is in the first house.'
      this.warnings.push(message)
    }
  }
}
