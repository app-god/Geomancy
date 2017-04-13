import { Component } from '@angular/core';

import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  readingsData = []

  constructor(public navCtrl: NavController, public storage: Storage,
    public modCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        this.readingsData = history
      })
    })
  }

  showReading(readingData) {
    let readingModal = this.modCtrl.create('ReadingPage', { readingData: readingData })
    readingModal.present()
  }

  deleteReading(readingData) {
    let readingIndex = this.readingsData.indexOf(readingData)
    this.readingsData.splice(readingIndex, 1)
    this.storage.ready().then(() => {
      this.storage.set('history', this.readingsData)
    })
  }

}
