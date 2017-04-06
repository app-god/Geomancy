import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the TetragramComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tetragram',
  templateUrl: 'tetragram.html'
})
export class TetragramComponent implements OnInit {

  @Input() key: number;
  row0: number
  row1: number
  row2: number
  row3: number

  constructor() {
  }

  renderRow(key: number) {
    if (key == 0) {
      return '0'
    } else if (key == 1) {
      return '0    0'
    }
  }

  ngOnInit() {
    this.row0 = (this.key >> 0) % 2
    this.row1 = (this.key >> 1) % 2
    this.row2 = (this.key >> 2) % 2
    this.row3 = (this.key >> 3) % 2
  }

}
