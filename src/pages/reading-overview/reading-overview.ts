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
  topicHouse

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading

    let placements = this.reading.getPlacements()

    this.placements = {
      warnings:   placements.filter(p => { return p.type === PlacementType.Warning }),
      strongest:  placements.filter(p => { return p.type === PlacementType.Strongest }),
      veryStrong: placements.filter(p => { return p.type === PlacementType.VeryStrong }),
      strong:     placements.filter(p => { return p.type === PlacementType.Strong }),
      veryWeak:   placements.filter(p => { return p.type === PlacementType.VeryWeak }),
      weakest:    placements.filter(p => { return p.type === PlacementType.Weakest })
    }

    this.topicHouse = this.reading.getTopicHouse()

  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

}
