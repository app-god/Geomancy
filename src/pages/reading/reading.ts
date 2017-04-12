import { Reading } from "../../models/reading";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { houseToInterpretation } from '../../models/tetragram'

/**
 * Generated class for the ReadingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage {

  h2i: number[] = houseToInterpretation
  reading: Reading

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public viewCtrl: ViewController) {
    this.reading = navParams.get('reading')
  }

  ionViewDidLoad() {
  }

  showTetragram(tetragram, house?: number) {
    this.navCtrl.push('TetragramPage', { tetragram: tetragram, house: house })
  }

  close() {
    this.viewCtrl.dismiss()
  }

}
