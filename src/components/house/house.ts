import { House } from '../../models/house';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'house',
  templateUrl: 'house.html'
})
export class HouseComponent {

  @Input() house: House

  constructor() {
  }

}
