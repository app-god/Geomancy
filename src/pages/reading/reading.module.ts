import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingPage } from './reading';
import { NewPageModule } from '../new/new.module';

@NgModule({
  declarations: [
    ReadingPage
  ],
  imports: [
    IonicPageModule.forChild(ReadingPage),
    NewPageModule
  ],
  exports: [
    ReadingPage
  ]
})
export class ReadingPageModule {}
