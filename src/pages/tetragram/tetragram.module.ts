import { HouseComponentModule } from './../../components/house/house.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TetragramPage } from './tetragram';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    TetragramPage,
  ],
  imports: [
    IonicPageModule.forChild(TetragramPage),
    TetragramComponentModule,
    HouseComponentModule
  ],
  exports: [
    TetragramPage
  ]
})
export class TetragramPageModule {}
