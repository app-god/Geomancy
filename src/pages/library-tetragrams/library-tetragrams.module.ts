import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryTetragramsPage } from './library-tetragrams';
import { TetragramComponentModule } from '../../components/tetragram/tetragram.module'

@NgModule({
  declarations: [
    LibraryTetragramsPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryTetragramsPage),
    TetragramComponentModule
  ],
  exports: [
    LibraryTetragramsPage
  ]
})
export class LibraryTetragramsPageModule {}
