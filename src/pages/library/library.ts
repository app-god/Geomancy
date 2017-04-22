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
      name: 'Instructions',
      page: 'LibraryTetragramsPage'
    },
    {
      name: 'Tetragrams',
      page: 'LibraryTetragramsPage'
    },
    {
      name: 'Houses',
      page: 'LibraryHousesPage'
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  showPage(page) {
    this.navCtrl.push(page)
  }

}
