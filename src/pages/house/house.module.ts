import { PlacementItemComponentModule } from './../../components/placement-item/placement-item.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousePage } from './house';

@NgModule({
  declarations: [
    HousePage,
  ],
  imports: [
    IonicPageModule.forChild(HousePage),
    PlacementItemComponentModule,
  ],
  exports: [
    HousePage
  ]
})
export class HousePageModule {}
