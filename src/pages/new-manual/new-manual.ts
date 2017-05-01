import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ReadingData } from "../../models/reading";

/**
 * Generated class for the NewManualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-manual',
  templateUrl: 'new-manual.html',
})
export class NewManualPage {

  question: string
  topic: string

  row = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private modCtrl: ModalController) {
      this.question = navParams.get('question')
      this.topic = navParams.get('topic')
  }

  clickInterpret() {
    this.modCtrl.create('ReadingPage', {
      readingData: this.generateReadingData()
    }).present()
    this.viewCtrl.dismiss()
  }

  generateReadingData() {
    let row = this.row
    let readingData: ReadingData = {
      question: this.question,
      topic: this.topic,
      date: Date.now(),
      key0: this.generateKey(row[1], row[2], row[3], row[4]),
      key1: this.generateKey(row[5], row[6], row[7], row[8]),
      key2: this.generateKey(row[9], row[10], row[11], row[12]),
      key3: this.generateKey(row[13], row[14], row[15], row[16]),
    }
    return readingData
  }

  generateKey(num1, num2, num3, num4): number {
    let row1 = num1 ? (num1 % 2) * 1 : 0
    let row2 = num2 ? (num2 % 2) * 2 : 0
    let row3 = num3 ? (num3 % 2) * 4 : 0
    let row4 = num4 ? (num4 % 2) * 8 : 0
    let key = row1 + row2 + row3 + row4
    return key
  }

}
