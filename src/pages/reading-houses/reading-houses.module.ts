import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingHousesPage } from './reading-houses';
import { PlacementItemComponentModule } from "../../components/placement-item/placement-item.module";

@NgModule({
  declarations: [
    ReadingHousesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingHousesPage),
    PlacementItemComponentModule
  ],
  exports: [
    ReadingHousesPage
  ]
})
export class ReadingHousesPageModule {}
