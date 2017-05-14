import { TetragramComponentModule } from '../tetragram/tetragram.module'
import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { TetragramItemComponent } from './tetragram-item'

@NgModule({
  declarations: [
    TetragramItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(TetragramItemComponent),
    TetragramComponentModule
  ],
  exports: [
    TetragramItemComponent
  ]
})
export class TetragramItemComponentModule {}
