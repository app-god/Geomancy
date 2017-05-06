import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HouseComponent } from './house';
import { TetragramComponentModule } from "../tetragram/tetragram.module";

@NgModule({
  declarations: [
    HouseComponent
  ],
  imports: [
    IonicModule,
    TetragramComponentModule
  ],
  exports: [
    HouseComponent
  ]
})
export class HouseComponentModule {}
