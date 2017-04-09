import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { Reading } from '../../models/reading'
import { Storage } from '@ionic/storage'
import { ReadingPage } from '../reading/reading'

@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {

  reading: Reading

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, public modCtrl: ModalController,
    public viewCtrl: ViewController) {

    let question = navParams.get('question')
    if (question == '') {
      question = "(blank)"
    }
    this.reading = new Reading(question)

    storage.ready().then(() => {
      storage.get('history').then(history => {
        history = history || []
        history.push(this.reading)
        storage.set('history', history)
        console.log(this.reading)
        console.log(history)
      })
    })

    let modReading = this.modCtrl.create(ReadingPage, { reading: this.reading })
    modReading.present()
    this.viewCtrl.dismiss()

  }

  ionViewDidLoad() {
  }

}
