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
  placements: any
  keys
  topicHouse
  warning
  partOfFortune

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.parent = navParams.get('parent')

    this.reading = this.parent.reading

    let placements = this.reading.placements

    this.warning = placements.find(placement => { return placement.type === PlacementType.Warning }),

    this.placements = {
      rules:      placements.filter(placement => { return placement.type === PlacementType.Strongest }),
      exalted:    placements.filter(placement => { return placement.type === PlacementType.VeryStrong }),
      triplicity: placements.filter(placement => { return placement.type === PlacementType.Strong })
    }

    this.keys = Object.keys(this.placements)

    this.topicHouse = this.reading.getTopicHouse()

    this.partOfFortune = this.reading.getHouse(this.reading.getPartOfFortune())

  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  showPlacement(placement) {
    this.parent.navCtrl.push('PlacementPage', { placement: placement })
  }
}
