import { Tetragram } from "../../models/tetragram";
import { Reading } from "../../models/reading";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

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

  reading: Reading

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.reading = navParams.get('reading')
  }

  ionViewDidLoad() {
  }

}
