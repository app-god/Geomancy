import { TetragramComponentModule } from './../tetragram/tetragram.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseItemComponent } from './house-item';

@NgModule({
  declarations: [
    HouseItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(HouseItemComponent),
    TetragramComponentModule
  ],
  exports: [
    HouseItemComponent
  ]
})
export class HouseItemComponentModule {}
