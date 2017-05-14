import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TetragramComponent } from './tetragram';

@NgModule({
  declarations: [
    TetragramComponent,
  ],
  imports: [
    IonicPageModule.forChild(TetragramComponent)
  ],
  exports: [
    TetragramComponent
  ]
})
export class TetragramComponentModule {}
