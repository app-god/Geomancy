import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ReadingPage } from '../reading/reading'

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  question: string = ''

  constructor(public navCtrl: NavController, private modCtrl: ModalController) {

  }

  clickStart() {
    let readingModal = this.modCtrl.create(ReadingPage, {
      question: this.question
    })
    readingModal.present()
  }

}
