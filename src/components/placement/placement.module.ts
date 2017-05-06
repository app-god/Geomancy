import { NgModule } from '@angular/core';
import { PlacementComponent } from './placement';
import { TetragramComponent } from "../tetragram/tetragram";

@NgModule({
  declarations: [
    PlacementComponent,
    TetragramComponent
  ],
  imports: [
  ],
  exports: [
    PlacementComponent
  ]
})
export class PlacementComponentModule {}
