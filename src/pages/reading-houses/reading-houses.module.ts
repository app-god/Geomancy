import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingHousesPage } from './reading-houses';

@NgModule({
  declarations: [
    ReadingHousesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingHousesPage),
  ],
  exports: [
    ReadingHousesPage
  ]
})
export class ReadingHousesPageModule {}
