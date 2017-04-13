import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { houseToInterpretation } from '../../models/tetragram'
import { Reading } from '../../models/reading'

@IonicPage()
@Component({
  selector: 'page-reading-figures',
  templateUrl: 'reading-figures.html',
})
export class ReadingFiguresPage {

  h2i: number[] = houseToInterpretation
  reading


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reading = navParams.data
  }

  showTetragram(tetragram, house?: number) {
    this.navCtrl.push('TetragramPage', { tetragram: tetragram, house: house })
  }

}
