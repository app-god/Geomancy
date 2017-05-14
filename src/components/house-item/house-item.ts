import { House } from './../../models/house';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'house-item',
  templateUrl: 'house-item.html'
})
export class HouseItemComponent {

  @Input() house: House
  
}
