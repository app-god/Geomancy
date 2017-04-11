import { Component } from '@angular/core';

import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  readings = []

  constructor(public navCtrl: NavController, public storage: Storage,
    public modCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        this.readings = history
      })
    })
  }

  showReading(reading) {
    let readingModal = this.modCtrl.create('ReadingPage', { reading: reading })
    readingModal.present()
  }

  deleteReading(reading) {
    let readingIndex = this.readings.indexOf(reading)
    this.readings.splice(readingIndex, 1)
    this.storage.ready().then(() => {
      this.storage.set('history', this.readings)
    })
  }

}
