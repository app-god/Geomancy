import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacementComponent } from './placement';

@NgModule({
  declarations: [
    PlacementComponent,
  ],
  imports: [
    IonicPageModule.forChild(PlacementComponent)
  ],
  exports: [
    PlacementComponent
  ]
})
export class PlacementComponentModule {}
