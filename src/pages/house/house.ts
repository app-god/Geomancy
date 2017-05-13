import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'
import { Tetragram } from "../../models/tetragram";

@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house: House
  tetragramsInHouse: House[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.house = this.navParams.get('house')
    let tetragrams = Tetragram.getAll()
    tetragrams.forEach(tetragram => {
      this.tetragramsInHouse.push(
        new House(this.house.number, tetragram)
      )
    })
  }

  showHouse(house) {
    this.navCtrl.push('HousePage', { house: house })
  }
}
