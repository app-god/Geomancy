import { ReadingOverviewPageModule } from './../reading-overview/reading-overview.module';
import { NewPageModule } from './../new/new.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingPage } from './reading';

@NgModule({
  declarations: [
    ReadingPage
  ],
  imports: [
    IonicPageModule.forChild(ReadingPage),
  ],
  exports: [
    ReadingPage
  ]
})
export class ReadingPageModule {}
