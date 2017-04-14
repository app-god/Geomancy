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
    TetragramComponentModule
  ],
  exports: [
    ReadingHousesPage
  ]
})
export class ReadingHousesPageModule {}
