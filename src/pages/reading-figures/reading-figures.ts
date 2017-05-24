import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Reading } from "../../models/reading";

@IonicPage()
@Component({
  selector: 'page-reading-figures',
  templateUrl: 'reading-figures.html',
})
export class ReadingFiguresPage {

  parent
  reading

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {

    let parent = navParams.get('parent')

    if (parent) {
      this.parent = parent
      this.reading = parent.reading
    } else {
      this.parent = this
      this.reading = new Reading(navParams.data)
    }

  }

  showTetragram(tetragram, house?: number) {
    this.parent.navCtrl.push('TetragramPage', { tetragram: tetragram })
  }

  ionViewWillEnter() {
    this.parent.title = 'Figures'
  }

}
