import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Tetragram } from '../../models/tetragram'
import { TetragramPage } from '../tetragram/tetragram'

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  tetragrams: Tetragram[]

  constructor(public navCtrl: NavController) {
    this.tetragrams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      .map(i => { return new Tetragram(i) })
  }

  showTetragram(tetragram) {
    this.navCtrl.push(TetragramPage, { tetragram: tetragram })
  }

}
