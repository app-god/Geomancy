import { HouseItemComponentModule } from './../../components/house-item/house-item.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacementPage } from './placement';
import { TetragramItemComponentModule } from "../../components/tetragram-item/tetragram-item.module";

@NgModule({
  declarations: [
    PlacementPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacementPage),
    HouseItemComponentModule,
    TetragramItemComponentModule,
  ],
  exports: [
    PlacementPage
  ]
})
export class PlacementPageModule {}
