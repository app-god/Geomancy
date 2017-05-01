import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reading, Placement, PlacementType } from '../../models/reading'

@IonicPage()
@Component({
  selector: 'page-reading-overview',
  templateUrl: 'reading-overview.html',
})
export class ReadingOverviewPage {
  parent
  reading
  placements: Placement[]
  placementType = PlacementType

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
    this.placements = this.reading.getPlacements()
    console.log(this.reading.getPlacements())
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  getColor(placementType: PlacementType) {
    let color: string
    if (placementType == PlacementType.Warning)
      color = 'danger'
    if (placementType == PlacementType.ExtremelyStrong)
      color = 'primary'
    if (placementType == PlacementType.VeryStrong)
      color = 'secondary'
    return color
  }

  getIcon(placementType: PlacementType) {
    let icon: string
    if (placementType == PlacementType.Warning)
      icon = 'warning'
    if (placementType == PlacementType.ExtremelyStrong)
      icon = 'star'
    if (placementType == PlacementType.VeryStrong)
      icon = 'star-outline'
    return icon
  }
}
