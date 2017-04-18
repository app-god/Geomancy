import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  topics = [
    {
      name: 'Tetragrams',
      description: 'description',
      page: 'LibraryTetragramsPage'
    },
    {
      name: 'Houses',
      description: 'description',
      page: 'LibraryHousesPage'
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  showPage(page) {
    this.navCtrl.push(page)
  }

}
