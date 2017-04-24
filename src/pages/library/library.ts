import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import { House } from '../../models/house'
import { Tetragram } from '../../models/tetragram'
import { LibraryTopic } from '../../models/library'

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  topics: LibraryTopic[] = [
    // {
    //   name: 'Instructions',
    // },
    {
      name: 'Tetragrams',
      loadItems: this.loadTetragrams
    },
    {
      name: 'Houses',
      loadItems: this.loadHouses
    },
    // {
    //   name: 'Planets',
    // },
  ]

  constructor(public navCtrl: NavController) {
  }

  showTopic(topic: LibraryTopic) {
    this.navCtrl.push('LibraryTopicPage', {
      topic: topic
    })
  }

  loadHouses() {
    let houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      .map(houseNumber => {
        return new House(houseNumber)
      })
    return houses
  }

  loadTetragrams() {
    let tetragrams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      .map(key => {
        return new Tetragram(key)
      })
    tetragrams.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
    })

    return tetragrams
  }

}
