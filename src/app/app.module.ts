import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { HistoryPage } from '../pages/history/history';
import { LibraryPage } from '../pages/library/library';
import { NewPage } from '../pages/new/new';
import { ReadingPage } from '../pages/reading/reading';
import { TetragramPage } from '../pages/tetragram/tetragram';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TetragramComponent } from '../components/tetragram/tetragram';

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    LibraryPage,
    NewPage,
    ReadingPage,
    TetragramPage,
    TetragramComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    HistoryPage,
    NewPage,
    ReadingPage,
    TetragramPage
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
