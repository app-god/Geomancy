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
  tab1Root = 'ReadingFiguresPage'
  tab2Root = 'LibraryPage'
  tab3Root = 'LibraryPage'
  paramsData

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public viewCtrl: ViewController) {
      this.paramsData = navParams.data
  }
}
