import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tetragram } from '../../models/tetragram'
import { House } from '../../models/house'
import { Placement } from "../../models/placement";

@IonicPage({
})
@Component({
  selector: 'page-tetragram',
  templateUrl: 'tetragram.html',
})
export class TetragramPage {

  tetragram: Tetragram
  placements
  details: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tetragram = navParams.get('tetragram')

    this.placements = Placement.getPlacementsForTetragram(this.tetragram)

    this.details = [
      {
        name: 'Meaning',
        value: this.tetragram.desc
      },
      {
        name: 'Keyword',
        value: this.tetragram.phrase
      },
      {
        name: 'Element',
        value: this.tetragram.element,
        class: this.tetragram.element.toLowerCase()
      },
      {
        name: 'Planet',
        value: this.tetragram.planet,
        class: this.tetragram.planet.toLowerCase()
      },
    ]
  }

  showTetragram(tetragram) {
    this.navCtrl.push('TetragramPage', { tetragram: tetragram })
  }

  showPlacement(placement) {
    this.navCtrl.push('PlacementPage', { placement: placement })
  }
}
