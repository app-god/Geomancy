import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  tetragrams = [
    {
      key: 0,
      name: 'Via'
    },
    {
      key: 1,
      name: 'Caput Draconis'
    },
    {
      key: 2,
      name: 'Puella'
    },
    {
      key: 3,
      name: 'Fortuna Major'
    },
    {
      key: 4,
      name: 'Puer'
    },
    {
      key: 5,
      name: 'Acquisitio'
    },
    {
      key: 6,
      name: 'Carcer'
    },
    {
      key: 7,
      name: 'Tristitia'
    },
    {
      key: 8,
      name: 'Cauda Draconis'
    },
    {
      key: 9,
      name: 'Conjunctio'
    },
    {
      key: 10,
      name: 'Amissio'
    },
    {
      key: 11,
      name: 'Albus'
    },
    {
      key: 12,
      name: 'Fortuna Minor'
    },
    {
      key: 13,
      name: 'Rubeus'
    },
    {
      key: 14,
      name: 'Laetitia'
    },
    {
      key: 15,
      name: 'Populus'
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
