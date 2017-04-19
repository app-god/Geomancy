import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'

@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house: House
  tetragramNamesWithMeanings: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.house = this.navParams.get('house')
    console.log('house', this.house)
    this.tetragramNamesWithMeanings = this.house.getTetragramNamesWithMeanings()
  }

}
