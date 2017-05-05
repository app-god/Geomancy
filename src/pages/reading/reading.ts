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
  title: string = 'Reading'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public actionCtrl: ActionSheetController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {
      this.reading = new Reading(navParams.get('readingData'))
      this.rootParams = {
        parent: this
      }
  }

  ionViewDidLoad() {
    if (this.navCtrl.length() == 1) {
      this.navCtrl.push('NewPage')
      this.navCtrl.setRoot('NewPage')
    }
  }

  showMore() {

    let actionSheet = this.actionCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Save Reading',
          handler: () => {
            this.saveReading()
          }
        },
        {
          text: 'Show Help',
          handler: () => {
            this.navCtrl.push('HelpPage', { topic: 'reading' })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })

    actionSheet.present()
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
          toast.present()
        })
      })
    })

  }
}
