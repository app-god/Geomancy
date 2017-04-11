import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingPage } from './reading';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    ReadingPage
  ],
  imports: [
    IonicPageModule.forChild(ReadingPage),
    TetragramComponentModule
  ],
  exports: [
    ReadingPage
  ]
})
export class ReadingPageModule {}
