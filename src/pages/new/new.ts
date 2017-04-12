import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Reading } from '../../models/reading'

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  startDisabled = false

  question: string = ''

  constructor(public navCtrl: NavController, private modCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private storage: Storage) {

  }

  clickStart() {

    this.startDisabled = true

    let loading = this.loadingCtrl.create({
      content: 'Generating reading'
    })
    loading.present()

    let reading = new Reading(this.question)

    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        history = history || []
        history.push(reading)
        this.storage.set('history', history)

        loading.dismiss()

        let readingModal = this.modCtrl.create('ReadingPage', {
          reading: reading
        })
        readingModal.present()

        this.startDisabled = false
      })
    })

  }

}
