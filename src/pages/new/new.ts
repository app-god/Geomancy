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
import { Tetragram } from "../../models/tetragram";

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  startDisabled = false
  readingType = 'automatic'

  question: string = ''
  topic: string = ''
  topics: string[]

  // for manual reading
  row = {}

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

    console.log(this.readingType)

    let readingData: ReadingData

    if (this.readingType == 'automatic') {
      readingData = {
        question: this.question,
        topic: this.topic,
        date: Date.now(),
        key0: Math.floor(Math.random() * 15),
        key1: Math.floor(Math.random() * 15),
        key2: Math.floor(Math.random() * 15),
        key3: Math.floor(Math.random() * 15)
      }
    }

    if (this.readingType == 'manual') {
      let row = this.row
      readingData = {
        question: this.question,
        topic: this.topic,
        date: Date.now(),
        key0: Tetragram.generateKey(row[1], row[2], row[3], row[4]),
        key1: Tetragram.generateKey(row[5], row[6], row[7], row[8]),
        key2: Tetragram.generateKey(row[9], row[10], row[11], row[12]),
        key3: Tetragram.generateKey(row[13], row[14], row[15], row[16]),
      }
    }

    this.question = ''
    this.topic = 'None'
    this.startDisabled = false

    let readingModal = this.modCtrl.create('ReadingPage', {
      readingData: readingData
    })

    readingModal.present()
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
