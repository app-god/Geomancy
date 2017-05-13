import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tetragram } from '../../models/tetragram'
import { House } from '../../models/house'

@IonicPage({
  segment: 'tetragram/:key'
})
@Component({
  selector: 'page-tetragram',
  templateUrl: 'tetragram.html',
})
export class TetragramPage {

  tetragram: Tetragram
  houses
  attributions: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tetragram = new Tetragram(navParams.get('key'))

    this.houses = House.getHousesWithTetragram(this.tetragram)

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
