import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tetragram } from '../../models/tetragram'
import { House } from '../../models/house'

@IonicPage()
@Component({
  selector: 'page-tetragram',
  templateUrl: 'tetragram.html',
})
export class TetragramPage {
  tetragram: Tetragram
  houses

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tetragram = navParams.get('item')
    this.houses = House.getHousesWithTetragram(this.tetragram)
  }

}
