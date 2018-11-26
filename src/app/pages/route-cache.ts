import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class RouteCache implements RouteReuseStrategy {
  _cacheRouters: { [key: string]: any } = {};

  // 从缓存中获取快照，若无则返回null
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // 从缓存中获取快照，若无则返回null
    if (!route.routeConfig || route.routeConfig.loadChildren || !this._cacheRouters[route.routeConfig.path]) {
      return null;
    }
    return this._cacheRouters[route.routeConfig.path].handle;
  }

  // 若path在缓存中有的都认为允许还原路由
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由
    return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
  }

  // 表示对路由允许复用
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 默认对所有路由复用 可通过给路由配置项增加data: { keep:  true }来进行选择性使用
    // {path: 'search', component: SearchComponent, data: {keep: true}},
    return !route.data.keep;
  }

  // 进入路由触发，判断是否同一路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    // 同一路由时复用路由
    return future.routeConfig === current.routeConfig;
  }

  // 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }
}
