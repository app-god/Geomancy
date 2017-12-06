import { Component } from '@angular/core';

import {
  App,
  IonicPage,
  NavController,
  ModalController,
  AlertController,
  ViewController
} from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage({
  defaultHistory: ['new-page']
})
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  readings = []

  constructor(
    public app: App,
    public navCtrl: NavController,
    public storage: Storage,
    public modCtrl: ModalController,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController
  ) {
  }

  ionViewWillEnter() {
    this.loadReadings()
  }

  loadReadings(): void {
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        if (history) {
          this.readings = history.sort(this.sortReadings)
        }
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
    this.app.getRootNav().push('ReadingPage', {
      question: readingData.question,
      topic: readingData.topic,
      date: readingData.date,
      key0: readingData.key0,
      key1: readingData.key1,
      key2: readingData.key2,
      key3: readingData.key3,
    })
  }

  deleteReading(reading) {
    let readingIndex = this.readings.indexOf(reading)
    this.readings.splice(readingIndex, 1)
    this.storage.ready().then(() => {
      this.storage.set('history', this.readings)
    })
  }

  deleteAllReadings() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Deletion',
      message: 'Do you want to delete all of your readings?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.storage.ready().then(() => {
              this.storage.set('history', [])
            })
            this.loadReadings()
          }
        }
      ]
    })
    alert.present()
  }

}
