import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tetragram } from '../../models/tetragram'

/**
 * Generated class for the TetragramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tetragram',
  templateUrl: 'tetragram.html',
})
export class TetragramPage {
  tetragram: Tetragram

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tetragram = navParams.get('tetragram')
  }

  ionViewDidLoad() {
  }

}
