import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '',
    redirectTo: 'draggable',
    pathMatch: 'full'
  }, {
    path: 'draggable',
    loadChildren: './draggable/draggable.module#DraggableModule'
  }, {
    path: 'mouse',
    loadChildren: './mouse/mouse.module#MouseModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
