import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableComponent} from './draggable.component';
import {DraggableRoutingModule} from './draggable-routing.module';

@NgModule({
  declarations: [DraggableComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule
  ]
})
export class DraggableModule {
}
