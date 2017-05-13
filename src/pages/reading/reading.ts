import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Reading } from '../../models/reading'

@IonicPage({
  segment: 'reading/:question/:topic/:date/:key0/:key1/:key2/:key3'
})
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

      let readingData = {
        question: navParams.get('question'),
        topic:    navParams.get('topic'),
        date:     navParams.get('date'),
        key0:     navParams.get('key0'),
        key1:     navParams.get('key1'),
        key2:     navParams.get('key2'),
        key3:     navParams.get('key3')
      }

      this.reading = new Reading(readingData)

      this.saved = navParams.get('saved') || false

      this.rootParams = {
        parent: this
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
            position: 'bottom'
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
            position: 'bottom'
          })
          this.saved = false
          toast.present()
        })
      })
    })
  }
}
