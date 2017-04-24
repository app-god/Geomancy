import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryItem } from '../../models/library'

@IonicPage()
@Component({
  selector: 'page-library-topic',
  templateUrl: 'library-topic.html',
})
export class LibraryTopicPage {
  topic
  items

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.topic = navParams.get('topic')
    this.items = this.topic.loadItems()
  }

  showItem(item) {
    this.navCtrl.push(item.page, { item: item })
  }

}
