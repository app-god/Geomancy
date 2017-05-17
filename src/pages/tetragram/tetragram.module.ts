import { TetragramItemComponentModule } from './../../components/tetragram-item/tetragram-item.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TetragramPage } from './tetragram';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'
import { PlacementItemComponentModule } from "../../components/placement-item/placement-item.module";

@NgModule({
  declarations: [
    TetragramPage,
  ],
  imports: [
    IonicPageModule.forChild(TetragramPage),
    TetragramComponentModule,
    PlacementItemComponentModule,
    TetragramItemComponentModule
  ],
  exports: [
    TetragramPage
  ]
})
export class TetragramPageModule {}
