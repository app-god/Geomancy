import { Component, Input } from '@angular/core';
import { Tetragram } from '../../models/tetragram'

@Component({
  selector: 'tetragram',
  templateUrl: 'tetragram.html'
})
export class TetragramComponent {

  @Input() tetragram: Tetragram

  constructor() {
  }

  renderRow(key: number) {
    if (key == 0) {
      return '0'
    } else if (key == 1) {
      return '0    0'
    }
  }
}
