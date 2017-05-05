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
  }

  ionViewWillEnter() {
    this.parent.title = 'Overview'
  }

  getColor(placementType: PlacementType) {
    let color: string
    if (placementType == PlacementType.Warning)
      color = 'danger'
    if (placementType == PlacementType.Strongest)
      color = 'dark'
    if (placementType == PlacementType.VeryStrong)
      color = 'dark'
    return color
  }

  getIcon(placementType: PlacementType) {
    let icon: string
    let prefix = 'assets/image/'
    switch (placementType) {
      case PlacementType.Warning:
        icon = 'skull.png'
        break
      case PlacementType.Strongest:
        icon = 'battery4.png'
        break
      case PlacementType.VeryStrong:
        icon = 'battery3.png'
        break
      case PlacementType.Strong:
        icon = 'battery2.png'
        break
      case PlacementType.VeryWeak:
        icon = 'battery1.png'
        break
      case PlacementType.Weakest:
        icon = 'battery0.png'
        break
    }
    return prefix + icon
  }
}
