import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TetragramPage } from './tetragram';

@NgModule({
  declarations: [
    TetragramPage,
  ],
  imports: [
    IonicPageModule.forChild(TetragramPage),
  ],
  exports: [
    TetragramPage
  ]
})
export class TetragramPageModule {}
