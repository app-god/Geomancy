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
  placements: Placement[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
    this.placements = this.reading.getPlacements()
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

}
