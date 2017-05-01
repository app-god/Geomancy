import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reading-info',
  templateUrl: 'reading-info.html',
})
export class ReadingInfoPage {
  reading

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reading = navParams.get('reading')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadingInfoPage');
  }

}
