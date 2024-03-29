import { Component } from '@angular/core';
import { Platform, MenuController, App, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'page-new'

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage,
    private menu: MenuController,
    private app: App,
    private ionicApp: IonicApp
  ) {

    /*
    storage.get('hasSeenTutorial').then(hasSeenTutorial => {
      if (hasSeenTutorial != true) {
        this.rootPage = 'TutorialPage'
      }
    })
    */

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
