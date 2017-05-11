import { House } from './../../models/house';
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
  warning: House
  influences: any
  influencesKeys: any
  keys
  topicHouse
  keyToString = Placement.keyToString

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.parent = navParams.get('parent')
    this.reading = this.parent.reading

    let houses = this.reading.houses

    this.warning = houses.find(house => { return house.placement.type === PlacementType.Warning })

    this.topicHouse = this.reading.getTopicHouse()

    this.influences = {
      rules:      houses.filter(house => { return house.placement.type === PlacementType.Strongest }),
      exalted:    houses.filter(house => { return house.placement.type === PlacementType.VeryStrong }),
      triplicity: houses.filter(house => { return house.placement.type === PlacementType.Strong })
      // normal:     houses.filter(house => { return house.placement.type === PlacementType.Weak }),
      // detriment:  houses.filter(house => { return house.placement.type === PlacementType.VeryWeak }),
      // fall:       houses.filter(house => { return house.placement.type === PlacementType.Weakest })
    }

    this.influencesKeys = Object.keys(this.influences)
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  showHouse(house) {
    this.parent.navCtrl.push('HousePage', { house: house })
  }
}
