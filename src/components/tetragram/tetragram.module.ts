import { NgModule } from '@angular/core';
import { TetragramComponent } from './tetragram';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TetragramComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TetragramComponent
  ]
})
export class TetragramComponentModule {}
