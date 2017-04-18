import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'

@IonicPage()
@Component({
  selector: 'page-library-houses',
  templateUrl: 'library-houses.html',
})
export class LibraryHousesPage {
  houses: House[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      .map(houseNumber => {
        return new House(houseNumber)
      })
  }

  showHouse(house) {
    this.navCtrl.push('HousePage', { house: house })
  }

}
