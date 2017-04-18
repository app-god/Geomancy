import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tetragram } from '../../models/tetragram'

@IonicPage()
@Component({
  selector: 'page-library-tetragrams',
  templateUrl: 'library-tetragrams.html',
})
export class LibraryTetragramsPage {
  tetragrams: Tetragram[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tetragrams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      .map(key => {
        return new Tetragram(key)
      })
  }

  showTetragram(tetragram) {
    this.navCtrl.push('TetragramPage', { tetragram: tetragram })
  }

}
