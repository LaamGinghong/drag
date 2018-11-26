import {RouterModule, Routes} from '@angular/router';
import {MouseComponent} from './mouse.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: MouseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MouseRoutingModule {
}
