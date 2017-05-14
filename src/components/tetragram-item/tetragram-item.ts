import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tetragram } from '../../models/tetragram'

@Component({
  selector: 'tetragram-item',
  templateUrl: 'tetragram-item.html'
})
export class TetragramItemComponent {

  @Input() tetragram: Tetragram

  constructor() {
  }

}
