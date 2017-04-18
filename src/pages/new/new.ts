import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { ReadingData } from '../../models/reading'
import { House } from '../../models/house'

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  startDisabled = false

  question: string = ''
  topic: string = ''
  houses: House[]

  constructor(public navCtrl: NavController, private modCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private storage: Storage) {
    this.houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(number => { return new House(number)})
    this.topic = this.houses[0].description
  }

  clickStart() {

    this.startDisabled = true

    let loading = this.loadingCtrl.create({
      content: 'Generating reading'
    })
    loading.present()

    let readingData: ReadingData = {
      question: this.question,
      topic: this.topic,
      date: Date.now(),
      key0: Math.floor(Math.random() * 15),
      key1: Math.floor(Math.random() * 15),
      key2: Math.floor(Math.random() * 15),
      key3: Math.floor(Math.random() * 15)
    }

    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        history = history || []
        history.push(readingData)
        this.storage.set('history', history)

        loading.dismiss()

        let readingModal = this.modCtrl.create('ReadingPage', {
          readingData: readingData
        })
        readingModal.present()

        this.question = ''
        this.startDisabled = false
      })
    })

  }

}
