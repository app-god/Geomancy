import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
  ) {
  }

  startApp() {
    this.navCtrl.push('TabsPage').then(() => {
      console.log('loaded TabsPage')
    })
  }

  onSlideChange(slides: Slides) {
    this.showSkip = !slides.isEnd()
  }

}
