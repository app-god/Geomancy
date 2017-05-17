import { Component, Input } from '@angular/core';
import { Tetragram } from '../../models/tetragram'

@Component({
  selector: 'tetragram',
  templateUrl: 'tetragram.html'
})
export class TetragramComponent {

  @Input() tetragram: Tetragram
  @Input() color: string = ''

  constructor() {
  }

  ngOnInit() {
    if (this.tetragram && this.color === 'planet') {
      this.color = this.tetragram.planet.toLowerCase()
    }
  }

  renderRow(key: number) {
    if (key == 0) {
      return '●'
    } else if (key == 1) {
      return '●    ●'
    }
  }
}
