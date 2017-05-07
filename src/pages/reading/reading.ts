import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ToastController } from 'ionic-angular';
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
  title: string
  saved: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public actionCtrl: ActionSheetController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {
      this.reading = new Reading(navParams.get('readingData'))
      this.saved = navParams.get('saved') || false
      this.rootParams = {
        parent: this
      }
  }

  ionViewDidEnter() {
    if (this.navCtrl.length() == 1) {
      this.navCtrl.setRoot('NewPage')
    }
  }

  saveReading() {

    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        history = history || []
        history.push(this.reading.readingData)
        this.storage.set('history', history).then(() => {
          let toast = this.toastCtrl.create({
            message: 'Reading was saved successfully',
            duration: 2000,
            position: 'top'
          })
          this.saved = true
          toast.present()
        })
      })
    })
  }

  deleteReading() {
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        let readingIndex = history.indexOf(this.reading)
        history.splice(readingIndex, 1)
        this.storage.set('history', history).then(() => {
          let toast = this.toastCtrl.create({
            message: 'Reading was deleted successfully',
            duration: 2000,
            position: 'top'
          })
          this.saved = false
          toast.present()
        })
      })
    })
  }
}
