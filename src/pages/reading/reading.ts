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
  rootParams: any
  title: string = 'Reading'
  helpTopic: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public viewCtrl: ViewController) {
      this.reading = new Reading(navParams.get('readingData'))
      this.rootParams = {
        parent: this
      }
  }

  close() {
    this.viewCtrl.dismiss()
  }

  showHelp() {
    if (this.helpTopic) {
      this.navCtrl.push('HelpPage', { topic: this.helpTopic })
    }
  }

}
