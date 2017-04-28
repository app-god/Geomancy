import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  @ViewChild('slides') slides: Slides

  showSkip = true

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public viewCtrl: ViewController
  ) {
  }

  startApp() {
    this.storage.set('hasSeenTutorial', true)
    this.navCtrl.push('TabsPage')
  }

  onSlideChange(slides: Slides) {
    this.showSkip = !slides.isEnd()
  }
}
