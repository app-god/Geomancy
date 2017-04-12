import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  reading

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reading = navParams.get('reading')
  }
}
