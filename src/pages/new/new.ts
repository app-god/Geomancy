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
import { houseInfo } from '../../models/house.info'
import { Tetragram } from "../../models/tetragram";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  manualForm: FormGroup
  row = {}

  constructor(
    public navCtrl: NavController,
    private modCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private actionCtrl: ActionSheetController,
    private formBuilder: FormBuilder
  ) {

    let nestedTopics = houseInfo.map(house => { return house.topics })

    this.topics = [].concat.apply([], nestedTopics)

    this.topics.sort()
    this.topics.unshift('None')

    this.topic = this.topics[0]

    // manual

    this.manualForm = formBuilder.group({
      row_1:  ['', Validators.required],
      row_2:  ['', Validators.required],
      row_3:  ['', Validators.required],
      row_4:  ['', Validators.required],
      row_5:  ['', Validators.required],
      row_6:  ['', Validators.required],
      row_7:  ['', Validators.required],
      row_8:  ['', Validators.required],
      row_9:  ['', Validators.required],
      row_10: ['', Validators.required],
      row_11: ['', Validators.required],
      row_12: ['', Validators.required],
      row_13: ['', Validators.required],
      row_14: ['', Validators.required],
      row_15: ['', Validators.required],
      row_16: ['', Validators.required]
    })

  }

  createReading() {

    this.startDisabled = true

    let readingData: ReadingData

    if (this.topic == 'None') {
      this.topic = ''
    }

    // generate data for automatic readings
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

    // generate data for manual readings
    if (this.readingType == 'manual') {
      let row = this.row
      readingData = {
        question: this.question,
        topic: this.topic,
        date: Date.now(),
        key0: Tetragram.generateKey(row[1], row[2], row[3], row[4]),
        key1: Tetragram.generateKey(row[5], row[6], row[7], row[8]),
        key2: Tetragram.generateKey(row[9], row[10], row[11], row[12]),
        key3: Tetragram.generateKey(row[13], row[14], row[15], row[16])
      }
    }

    // clear manual data
    Object.keys(this.row).forEach((r) => {
      this.row[r] = ''
    })

    // reset inputs
    this.question = ''
    this.topic = 'None'
    this.startDisabled = false

    this.navCtrl.push('ReadingPage', {
      question: readingData.question,
      topic: readingData.topic,
      date: readingData.date,
      key0: readingData.key0,
      key1: readingData.key1,
      key2: readingData.key2,
      key3: readingData.key3
    })

  }

  showMore() {

    let actionSheet = this.actionCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Load Reading',
          handler: () => {
            this.navCtrl.push('HistoryPage')
          }
        },
        {
          text: 'Show Introduction',
          handler: () => {
            let introMod = this.modCtrl.create('TutorialPage')
            introMod.present()
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
