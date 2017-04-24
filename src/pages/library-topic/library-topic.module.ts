import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryTopicPage } from './library-topic';

@NgModule({
  declarations: [
    LibraryTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryTopicPage),
  ],
  exports: [
    LibraryTopicPage
  ]
})
export class LibraryTopicPageModule {}
