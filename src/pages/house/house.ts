import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'
import { tetragramInfo } from '../../models/tetragram'

@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house: House
  tetragramNamesWithMeanings: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.house = this.navParams.get('item')
    console.log('house', this.house)
    this.tetragramNamesWithMeanings = this.getTetragramNamesWithMeanings()
  }

  getTetragramNamesWithMeanings(): any[] {
    let namesWithMeanings = tetragramInfo.map(info => {
      return {
        name: info.name,
        meaning: info.houseMeanings[this.house.number - 1]
      }
    })
    namesWithMeanings.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
    })
    return namesWithMeanings
  }

}
