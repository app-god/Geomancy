import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { ReadingPage } from '../reading/reading'

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
    this.storage.get('history').then(history => {
      this.readings = history
    })
  }

  showReading(reading) {
    let readingModal = this.modCtrl.create(ReadingPage, { reading: reading })
    readingModal.present()
  }

}
