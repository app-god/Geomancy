import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { House } from '../../models/house'
import { Tetragram } from "../../models/tetragram";
import { Placement } from "../../models/placement";

@IonicPage()
@Component({
  selector: 'page-house',
  templateUrl: 'house.html',
})
export class HousePage {
  house: House
  placements: Placement[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.house = this.navParams.get('house')

    let tetragrams = Tetragram.getAll()

    tetragrams.forEach(tetragram => {
      this.placements.push(
        new Placement(this.house, tetragram)
      )
    })

  }

  showPlacement(placement) {
    this.navCtrl.push('PlacementPage', { placement: placement })
  }

}
