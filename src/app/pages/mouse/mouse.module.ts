import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MouseComponent} from './mouse.component';
import {MouseRoutingModule} from './mouse-routing.module';

@NgModule({
  declarations: [MouseComponent],
  imports: [
    CommonModule,
    MouseRoutingModule
  ]
})
export class MouseModule {
}
