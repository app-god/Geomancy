import { Component, Input } from '@angular/core';
import { Placement } from "../../models/placement";

@Component({
  selector: 'placement',
  templateUrl: 'placement.html'
})
export class PlacementComponent {

  @Input() placement: Placement

  constructor() {
  }

}
