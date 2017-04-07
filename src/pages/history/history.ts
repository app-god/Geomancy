import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  readings = []

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('history').then(history => {
      this.readings = history
    })
  }

}
