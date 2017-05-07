import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage)
  ],
  exports: [
    HistoryPage
  ]
})
export class HistoryPageModule {}
