import { HouseComponentModule } from './../../components/house/house.module';
import { PlacementComponentModule } from './../../components/placement/placement.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingHousesPage } from './reading-houses';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    ReadingHousesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingHousesPage),
    TetragramComponentModule,
    HouseComponentModule
  ],
  exports: [
    ReadingHousesPage
  ]
})
export class ReadingHousesPageModule {}
