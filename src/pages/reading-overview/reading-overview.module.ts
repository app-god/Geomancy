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
  ],
  exports: [
    ReadingOverviewPage
  ]
})
export class ReadingOverviewPageModule {}
