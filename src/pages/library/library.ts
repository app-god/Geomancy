import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  topics: any[] = [
    {
      name: 'Houses',
      page: 'LibraryHousesPage'
    },
    {
      name: 'Tetragrams',
      page: 'LibraryTetragramsPage'
    },
    {
      name: 'Instructions',
      page: 'LibraryTetragramsPage'
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  showPage(page) {
    this.navCtrl.push(page)
  }

}
