import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousePage } from './house';

@NgModule({
  declarations: [
    HousePage,
  ],
  imports: [
    IonicPageModule.forChild(HousePage),
  ],
  exports: [
    HousePage
  ]
})
export class HousePageModule {}
