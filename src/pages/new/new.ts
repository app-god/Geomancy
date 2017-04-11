import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  question: string = ''

  constructor(public navCtrl: NavController, private modCtrl: ModalController) {

  }

  clickStart() {
    this.navCtrl.push('RandomPage', { question: this.question })
    // let randomModal = this.modCtrl.create('RandomPage', {
    //   question: this.question
    // })
    // randomModal.present()
  }

}
