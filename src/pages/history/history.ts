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
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        this.readings = history.sort(this.sortReadings)
      })
    })
  }

  sortReadings(a, b) {
    if (a.date < b.date) {
      return 1
    }
    if (a.date > b.date) {
      return -1
    }
    return 0
  }

  showReading(readingData) {
    let readingModal = this.modCtrl.create('ReadingPage', { readingData: readingData })
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
