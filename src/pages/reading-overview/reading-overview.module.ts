import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingOverviewPage } from './reading-overview';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'
import { PlacementComponent } from '../../components/placement/placement';

@NgModule({
  declarations: [
    ReadingOverviewPage,
    PlacementComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReadingOverviewPage),
    TetragramComponentModule,
  ],
  exports: [
    ReadingOverviewPage
  ]
})
export class ReadingOverviewPageModule {}
