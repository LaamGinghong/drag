import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RouteCache} from './pages/route-cache';

const routes: Routes = [{
  path: '',
  redirectTo: 'pages',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: RouteCache
  }]
})

export class AppRoutingModule {
}
