import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reading } from '../../models/reading'
import { Placement } from '../../models/placement'
import { PlacementType } from '../../models/placement.type'

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
  topicPlacement
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

    this.topicPlacement = this.reading.getTopicPlacement()

    let partOfFortuneNumber = this.reading.getPartOfFortune()
    this.partOfFortune = this.reading.getPlacementForHouseNumber(partOfFortuneNumber)

  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  showTetragram(tetragram) {
    this.parent.navCtrl.push('TetragramPage', { tetragram: tetragram })
  }

  showPlacement(placement) {
    this.parent.navCtrl.push('PlacementPage', { placement: placement })
  }
}
