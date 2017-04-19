import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  topic: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.topic = navParams.get('topic')
  }

}
