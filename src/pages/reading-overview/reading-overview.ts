import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reading } from '../../models/reading'
import { Placement } from '../../models/placement'

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  parent
  reading
  placements: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
    this.placements = {
      warnings: this.reading.getWarnings(),
      strongest: this.reading.getPlacementsFor('rules'),
      veryStrong: this.reading.getPlacementsFor('exalted'),
      strong: this.reading.getPlacementsFor('triplicity'),
      veryWeak: this.reading.getPlacementsFor('detriment'),
      weakest: this.reading.getPlacementsFor('fall')
    }

  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

}
