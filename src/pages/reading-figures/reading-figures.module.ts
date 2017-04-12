import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingFiguresPage } from './reading-figures';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    ReadingFiguresPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingFiguresPage),
    TetragramComponentModule
  ],
  exports: [
    ReadingFiguresPage
  ]
})
export class ReadingFiguresPageModule {}
