import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reading } from '../../models/reading'
import { Placement, PlacementType } from '../../models/placement'

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  parent
  reading
  houses: any
  keys
  topicHouse
  keyToString = Placement.keyToString

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading

    let houses = this.reading.houses

    this.houses = {
      warning:    houses.filter(house => { return house.placement.type === PlacementType.Warning }),
      rules:      houses.filter(house => { return house.placement.type === PlacementType.Strongest }),
      exalted:    houses.filter(house => { return house.placement.type === PlacementType.VeryStrong }),
      triplicity: houses.filter(house => { return house.placement.type === PlacementType.Strong })
    }

    this.keys = Object.keys(this.houses)

    this.topicHouse = this.reading.getTopicHouse()
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  showHouse(house) {
    this.parent.navCtrl.push('HousePage', { house: house })
  }
}
