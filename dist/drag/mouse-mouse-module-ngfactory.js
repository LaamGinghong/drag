(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mouse-mouse-module-ngfactory"],{

/***/ "./src/app/pages/mouse/mouse-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mouse/mouse-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MouseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseRoutingModule", function() { return MouseRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mouse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.component */ "./src/app/pages/mouse/mouse.component.ts");


var routes = [{
        path: '',
        component: _mouse_component__WEBPACK_IMPORTED_MODULE_1__["MouseComponent"]
    }];
var MouseRoutingModule = /** @class */ (function () {
    function MouseRoutingModule() {
    }
    return MouseRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/mouse/mouse.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/mouse/mouse.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_MouseComponent, View_MouseComponent_0, View_MouseComponent_Host_0, MouseComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MouseComponent", function() { return RenderType_MouseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MouseComponent_0", function() { return View_MouseComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MouseComponent_Host_0", function() { return View_MouseComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseComponentNgFactory", function() { return MouseComponentNgFactory; });
/* harmony import */ var _mouse_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse.component.scss.shim.ngstyle */ "./src/app/pages/mouse/mouse.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mouse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse.component */ "./src/app/pages/mouse/mouse.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_MouseComponent = [_mouse_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MouseComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MouseComponent, data: {} });

function View_MouseComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { box: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["box", 1]], null, 0, "div", [], null, [["window", "mousedown"], ["window", "mouseup"], ["window", "mousemove"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:mousedown" === en)) {
        var pd_0 = (_co.drag($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:mouseup" === en)) {
        var pd_1 = (_co.drop() !== false);
        ad = (pd_1 && ad);
    } if (("window:mousemove" === en)) {
        var pd_2 = (_co.move($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null))], null, null); }
function View_MouseComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-mouse", [], null, null, null, View_MouseComponent_0, RenderType_MouseComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _mouse_component__WEBPACK_IMPORTED_MODULE_2__["MouseComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MouseComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-mouse", _mouse_component__WEBPACK_IMPORTED_MODULE_2__["MouseComponent"], View_MouseComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/mouse/mouse.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/mouse/mouse.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["div[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  background: orangered;\n  cursor: move; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW91c2UvRTpcXHByb2plY3RcXGRyYWcvc3JjXFxhcHBcXHBhZ2VzXFxtb3VzZVxcbW91c2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW91c2UvbW91c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/pages/mouse/mouse.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/mouse/mouse.component.ts ***!
  \************************************************/
/*! exports provided: MouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseComponent", function() { return MouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MouseComponent = /** @class */ (function () {
    function MouseComponent(renderer2) {
        this.renderer2 = renderer2;
        this.dragging = false;
    }
    MouseComponent.prototype.ngOnInit = function () {
        this.body = document.body;
    };
    MouseComponent.prototype.drag = function (e) {
        if (e.target === this.box.nativeElement) {
            this.dragging = true;
            this.mouseLeft = e.clientX - this.box.nativeElement.offsetLeft;
            this.mouseTop = e.clientY - this.box.nativeElement.offsetTop;
        }
    };
    MouseComponent.prototype.drop = function () {
        this.dragging = false;
    };
    MouseComponent.prototype.move = function (e) {
        if (this.dragging) {
            if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop < 0) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', "0px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', "0px");
                return;
            }
            if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', this.body.clientWidth - 200 + "px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', this.body.clientHeight - 200 + "px");
                return;
            }
            if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', "0px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', this.body.clientHeight - 200 + "px");
                return;
            }
            if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop < 0) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', this.body.clientWidth - 200 + "px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', "0px");
                return;
            }
            if (e.clientX - this.mouseLeft < 0) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', "0px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', e.clientY - this.mouseTop + "px");
                return;
            }
            if (e.clientY - this.mouseTop < 0) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', e.clientX - this.mouseLeft + "px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', "0px");
                return;
            }
            if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', this.body.clientWidth - 200 + "px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', e.clientY - this.mouseTop + "px");
                return;
            }
            if (e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
                this.renderer2.setStyle(this.box.nativeElement, 'left', e.clientX - this.mouseLeft + "px");
                this.renderer2.setStyle(this.box.nativeElement, 'top', this.body.clientHeight - 200 + "px");
                return;
            }
            this.renderer2.setStyle(this.box.nativeElement, 'left', e.clientX - this.mouseLeft + "px");
            this.renderer2.setStyle(this.box.nativeElement, 'top', e.clientY - this.mouseTop + "px");
        }
    };
    return MouseComponent;
}());



/***/ }),

/***/ "./src/app/pages/mouse/mouse.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/pages/mouse/mouse.module.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: MouseModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseModuleNgFactory", function() { return MouseModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mouse_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.module */ "./src/app/pages/mouse/mouse.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _mouse_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse.component.ngfactory */ "./src/app/pages/mouse/mouse.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mouse_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mouse-routing.module */ "./src/app/pages/mouse/mouse-routing.module.ts");
/* harmony import */ var _mouse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouse.component */ "./src/app/pages/mouse/mouse.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var MouseModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_mouse_module__WEBPACK_IMPORTED_MODULE_1__["MouseModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _mouse_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MouseComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mouse_routing_module__WEBPACK_IMPORTED_MODULE_6__["MouseRoutingModule"], _mouse_routing_module__WEBPACK_IMPORTED_MODULE_6__["MouseRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _mouse_module__WEBPACK_IMPORTED_MODULE_1__["MouseModule"], _mouse_module__WEBPACK_IMPORTED_MODULE_1__["MouseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "", component: _mouse_component__WEBPACK_IMPORTED_MODULE_7__["MouseComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/mouse/mouse.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/mouse/mouse.module.ts ***!
  \*********************************************/
/*! exports provided: MouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseModule", function() { return MouseModule; });
var MouseModule = /** @class */ (function () {
    function MouseModule() {
    }
    return MouseModule;
}());



/***/ })

}]);
//# sourceMappingURL=mouse-mouse-module-ngfactory.js.map