import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryHousesPage } from './library-houses';

@NgModule({
  declarations: [
    LibraryHousesPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryHousesPage),
  ],
  exports: [
    LibraryHousesPage
  ]
})
export class LibraryHousesPageModule {}
