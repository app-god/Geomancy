import { Component } from '@angular/core';
import { Platform, MenuController, App, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'NewPage'

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
      this.setupBackButton()
    });
  }

  private setupBackButton() {

    // if on web version
    if (window.location.protocol !== 'file:') {

      // register browser's back button action(s)
      window.onpopstate = (evt) => {

        // close menu if open
        if (this.menu.isOpen()) {
          this.menu.close()
          return
        }

        // close any active modals or overlays
        let activePortal = this.ionicApp._loadingPortal.getActive() ||
          this.ionicApp._modalPortal.getActive() ||
          this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive()

        if (activePortal) {
          activePortal.dismiss()
          return
        }

        // navigate back
        if (this.app.getRootNav().canGoBack()) this.app.getRootNav().pop()

      };

      // fake browser history on each view enter
      this.app.viewDidEnter.subscribe((app) => {
        history.pushState (null, null)
      })

    }
  }
}
