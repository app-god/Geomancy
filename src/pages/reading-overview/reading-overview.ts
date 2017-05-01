import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  parent
  reading
  warnings: string[] = []
  rulerships: string[] = []
  exaltations: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
    this.warnings = this.reading.getWarnings()
    this.rulerships = this.reading.getRulerships()
    this.exaltations = this.reading.getExaltations()
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
    this.parent.helpTopic = null
  }

}
