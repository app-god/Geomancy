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
  attributions: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tetragram = navParams.get('tetragram')

    this.placements = Placement.getPlacementsForTetragram(this.tetragram)

    this.attributions = [
      {
        name: 'Keyword',
        value: this.tetragram.phrase
      },
      {
        name: 'Planet',
        value: this.tetragram.planet
      },
      {
        name: 'Zodiac',
        value: this.tetragram.sign
      },
    ]
  }
}
