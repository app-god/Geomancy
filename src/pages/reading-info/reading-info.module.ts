import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingInfoPage } from './reading-info';

@NgModule({
  declarations: [
    ReadingInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingInfoPage),
  ],
  exports: [
    ReadingInfoPage
  ]
})
export class ReadingInfoPageModule {}
