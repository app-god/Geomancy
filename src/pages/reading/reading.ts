import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage {
  paramsData

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public viewCtrl: ViewController) {
      this.paramsData = navParams.data
  }
}
