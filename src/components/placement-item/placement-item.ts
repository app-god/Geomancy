import { Component, Input } from '@angular/core';
import { Placement } from "../../models/placement";

@Component({
  selector: 'placement-item',
  templateUrl: 'placement-item.html'
})
export class PlacementItemComponent {

  @Input() placement: Placement

  constructor() {
  }

}
