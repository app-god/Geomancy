import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewManualPage } from './new-manual';

@NgModule({
  declarations: [
    NewManualPage,
  ],
  imports: [
    IonicPageModule.forChild(NewManualPage),
  ],
  exports: [
    NewManualPage
  ]
})
export class NewManualPageModule {}
