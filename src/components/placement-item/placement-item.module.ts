import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacementItemComponent } from './placement-item';
import { TetragramComponentModule } from "../tetragram/tetragram.module";

@NgModule({
  declarations: [
    PlacementItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(PlacementItemComponent),
    TetragramComponentModule
  ],
  exports: [
    PlacementItemComponent
  ]
})
export class PlacementItemComponentModule {}
