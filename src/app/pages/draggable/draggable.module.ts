import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableComponent} from './draggable.component';
import {DraggableRoutingModule} from './draggable-routing.module';
import { DragDirective } from './drag.directive';

@NgModule({
  declarations: [DraggableComponent, DragDirective],
  imports: [
    CommonModule,
    DraggableRoutingModule
  ]
})
export class DraggableModule {
}
