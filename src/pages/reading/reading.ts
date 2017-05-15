import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ToastController, AlertController } from 'ionic-angular';
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
  saved: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public actionCtrl: ActionSheetController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController) {

      let readingData = {
        question: navParams.get('question'),
        topic:    navParams.get('topic'),
        date:     parseInt(navParams.get('date')),
        key0:     parseInt(navParams.get('key0')),
        key1:     parseInt(navParams.get('key1')),
        key2:     parseInt(navParams.get('key2')),
        key3:     parseInt(navParams.get('key3'))
      }

      this.reading = new Reading(readingData)

      this.rootParams = {
        parent: this
      }
  }

  ionViewDidLoad() {

      // check if reading is saved

      this.storage.ready().then(() => {
        this.storage.get('history').then(history => {
          history = history || []

          let dates = history.map(h => { return h.date })

          if (dates.indexOf(this.reading.date) >= 0) {
            this.saved = true
          } else {
            this.saved = false
          }
        })
      })

  }

  clickBack() {
    if (this.saved) {
      this.navCtrl.setRoot('NewPage')
    }

    if (!this.saved) {
      let alert = this.alertCtrl.create({
        title: 'Are you sure you want to leave this reading?',
        message: 'If you leave without saving, this reading will be lost.',
        buttons: [
          {
            text: 'Save and Leave',
            handler: () => {
              this.saveReading()
              this.navCtrl.setRoot('NewPage')
            }
          },
          {
            text: 'Leave without Saving',
            handler: () => {
              this.navCtrl.setRoot('NewPage')
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          },
        ]
      })
      alert.present()
    }
  }

  saveReading() {
    this.storage.ready().then(() => {
      this.storage.get('history').then(history => {
        history = history || []
        history.push(this.reading.readingData)
        this.storage.set('history', history).then(() => {
          this.saved = true
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
          this.saved = false
        })
      })
    })
  }
}
