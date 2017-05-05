import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'

@IonicPage()
@Component({
  selector: 'page-reading-houses',
  templateUrl: 'reading-houses.html',
})
export class ReadingHousesPage {
  reading
  parent
  houses: House[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading

    let houseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    for (let number of houseNumbers) {
      let house = new House(number)
      house.tetragram = this.reading.getTetragramForHouse(number)
      this.houses.push(house)
    }
  }

  showHouse(house) {
    this.parent.navCtrl.push('HousePage', { item: house })
  }

  ionViewWillEnter() {
    this.parent.title = 'Houses'
  }

}
