import { House } from '../../models/house';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'house',
  templateUrl: 'house.html'
})
export class HouseComponent {

  @Input() house: House
  @Output() onTap: EventEmitter<House> = new EventEmitter()

  constructor() {
  }

}
