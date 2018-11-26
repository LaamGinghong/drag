import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';
import {RouteCache} from './route-cache';

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
  exports: [RouterModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: RouteCache
  }]
})

export class PagesRoutingModule {
}
