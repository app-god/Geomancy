import { TetragramComponentModule } from './../../components/tetragram/tetragram.module';
import { HouseComponentModule } from './../../components/house/house.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousePage } from './house';

@NgModule({
  declarations: [
    HousePage,
  ],
  imports: [
    IonicPageModule.forChild(HousePage),
    HouseComponentModule,
    TetragramComponentModule
  ],
  exports: [
    HousePage
  ]
})
export class HousePageModule {}
