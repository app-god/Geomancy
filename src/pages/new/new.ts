import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

import {
  NavController,
  ModalController,
  LoadingController,
  AlertController,
  IonicPage,
  ActionSheetController
} from 'ionic-angular';

import { ReadingData } from '../../models/reading'
import { House } from '../../models/house'

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  startDisabled = false
  platformKey: string

  question: string = ''
  topic: string = ''
  topics: string[]

  constructor(
    public navCtrl: NavController,
    private modCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private actionCtrl: ActionSheetController
  ) {

    let houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(number => { return new House(number)})

    let nestedTopics = houses.map(house => { return house.topics })

    this.topics = [].concat.apply([], nestedTopics)

    this.topics.sort()
    this.topics.unshift('None')

    this.topic = this.topics[0]

  }

  clickStart() {

    this.startDisabled = true

    if (this.question == '') {
      this.question = 'None'
    }

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
        this.topic = 'None'
        this.startDisabled = false
      })
    })

  }

  showMore() {

    let actionSheet = this.actionCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Show Introduction',
          handler: () => {
            let introMod = this.modCtrl.create('TutorialPage')
            introMod.present()
          }
        },
        {
          text: 'Show Help',
          handler: () => {
            this.navCtrl.push('HelpPage', { topic: 'new reading' })
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

}
