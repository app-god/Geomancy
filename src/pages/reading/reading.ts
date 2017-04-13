import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Reading } from '../../models/reading'

@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage {
  reading: Reading

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public viewCtrl: ViewController) {
      this.reading = new Reading(navParams.get('readingData'))
  }
}
