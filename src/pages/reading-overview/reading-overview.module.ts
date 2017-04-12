import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingOverviewPage } from './reading-overview';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    ReadingOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingOverviewPage),
    TetragramComponentModule
  ],
  exports: [
    ReadingOverviewPage
  ]
})
export class ReadingOverviewPageModule {}
