import { TetragramItemComponentModule } from './../../components/tetragram-item/tetragram-item.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadingOverviewPage } from './reading-overview';
import { PlacementItemComponentModule } from "../../components/placement-item/placement-item.module";

@NgModule({
  declarations: [
    ReadingOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadingOverviewPage),
    PlacementItemComponentModule,
    TetragramItemComponentModule
  ],
  exports: [
    ReadingOverviewPage
  ]
})
export class ReadingOverviewPageModule {}
