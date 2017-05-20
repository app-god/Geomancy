import { Component, Input } from '@angular/core';
import { Tetragram } from '../../models/tetragram'

@Component({
  selector: 'tetragram',
  templateUrl: 'tetragram.html'
})
export class TetragramComponent {

  @Input() tetragram: Tetragram
  @Input() color: string = ''

  ngOnInit() {
    if (this.color === 'planet') {
      this.color = this.tetragram.planet.toLowerCase()
    }

    if (this.color === 'element') {
      this.color = this.tetragram.element.toLowerCase()
    }
  }
}
