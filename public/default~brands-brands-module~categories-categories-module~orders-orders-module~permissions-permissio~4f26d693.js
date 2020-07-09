(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~brands-brands-module~categories-categories-module~orders-orders-module~permissions-permissio~4f26d693"],{

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");








class AuthInterceptor {
    constructor(auth, notifier) {
        this.auth = auth;
        this.notifier = notifier;
    }
    intercept(request, next) {
        _app_component__WEBPACK_IMPORTED_MODULE_4__["loader"].of.next(true);
        const token = this.auth.appUser.token;
        request = request.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            })
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // console.log(err);
            // authentication error
            if (err.status === 401) {
                this.notifier.error(err.statusText);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.statusText);
            }
            // Handle application error
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.error) {
                    let message = '';
                    Object
                        .keys(err.error)
                        .forEach(k => {
                        const error = err.error[k];
                        if (Array.isArray(error)) {
                            error.forEach(e => message += `${k}-${e}\n`);
                        }
                        else {
                            message += `${k}-${error}\n`;
                        }
                    });
                    this.notifier.error(message);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(message);
                }
                if (err.headers.get('Message') || err.headers.get('message')) {
                    console.log(err.headers.get('Message'));
                    const error = err.headers.get('message') || err.headers.get('Message');
                    if (error) {
                        this.notifier.error(error);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }
                }
            }
            if (err.error.message) {
                this.notifier.error(err.error.message);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error.message);
            }
            // Else
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(e => {
            _app_component__WEBPACK_IMPORTED_MODULE_4__["loader"].of.next(false);
            if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && e.status === 200) {
                const message = e.headers.get('Message') || e.headers.get('message');
                if (message && message.length > 0) {
                    this.notifier.success(message);
                }
            }
            return e;
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dashboard-resource/dashboard-resource.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dashboard-resource/dashboard-resource.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardResourceModule", function() { return DashboardResourceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-view/table-view.component */ "./src/app/shared/dashboard-resource/table-view/table-view.component.ts");
/* harmony import */ var _resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-details/resource-details.component */ "./src/app/shared/dashboard-resource/resource-details/resource-details.component.ts");
/* harmony import */ var _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resource-form/resource-form.component */ "./src/app/shared/dashboard-resource/resource-form/resource-form.component.ts");
/* harmony import */ var _resource_delete_resource_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resource-delete/resource-delete.component */ "./src/app/shared/dashboard-resource/resource-delete/resource-delete.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











class DashboardResourceModule {
}
DashboardResourceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardResourceModule });
DashboardResourceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardResourceModule_Factory(t) { return new (t || DashboardResourceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardResourceModule, { declarations: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_5__["TableViewComponent"], _resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsComponent"], _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_7__["ResourceFormComponent"], _resource_delete_resource_delete_component__WEBPACK_IMPORTED_MODULE_8__["ResourceDeleteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]], exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_5__["TableViewComponent"],
        _resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsComponent"],
        _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_7__["ResourceFormComponent"],
        _resource_delete_resource_delete_component__WEBPACK_IMPORTED_MODULE_8__["ResourceDeleteComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardResourceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_5__["TableViewComponent"], _resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsComponent"], _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_7__["ResourceFormComponent"], _resource_delete_resource_delete_component__WEBPACK_IMPORTED_MODULE_8__["ResourceDeleteComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ],
                exports: [
                    _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_5__["TableViewComponent"],
                    _resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsComponent"],
                    _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_7__["ResourceFormComponent"],
                    _resource_delete_resource_delete_component__WEBPACK_IMPORTED_MODULE_8__["ResourceDeleteComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/dashboard-resource/resource-delete/resource-delete.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/dashboard-resource/resource-delete/resource-delete.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResourceDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDeleteComponent", function() { return ResourceDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");







const _c0 = ["content"];
function ResourceDeleteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceDeleteComponent_ng_template_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceDeleteComponent_ng_template_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.ok(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.context == null ? null : ctx_r1.context.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.context == null ? null : ctx_r1.context.description);
} }
class ResourceDeleteComponent {
    constructor(http, router, route, modalService, notifier) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.notifier = notifier;
    }
    ngAfterViewInit() {
        const options = {
            backdrop: 'static',
            size: 'sm'
        };
        this.modal = this.modalService.open(this.content, options);
        // console.log(this.modal);
        if (!this.modal || !history.state.resource) {
            this.ok();
        }
    }
    delete() {
        this.http
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].prepareUrl(this.context.deleteUrl, this.context.data))
            .subscribe(ok => {
            if (ok) {
                this.notifier.success('Resource deleted successfully');
                this.ok();
                return;
            }
            this.notifier.error('Somthing went wrong, Failed to delete the resource');
        });
    }
    ok() {
        if (this.modal) {
            this.modal.dismiss();
        }
        else {
            this.modalService.dismissAll();
        }
        // this.router.navigate(['../'], { relativeTo: this.route });
        history.back();
    }
}
ResourceDeleteComponent.ɵfac = function ResourceDeleteComponent_Factory(t) { return new (t || ResourceDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
ResourceDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceDeleteComponent, selectors: [["app-resource-delete"]], viewQuery: function ResourceDeleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { context: "context" }, decls: 4, vars: 0, consts: [["type", "info", 3, "close"], ["content", ""], [1, "modal-body"], [1, "modal-title", "mt-1", "pt-2"], [1, "modal-footer"], [1, "btn", "btn-sm", "btn-rounded", "btn-danger", 3, "click"], [1, "btn", "btn-sm", "btn-rounded", "btn-secondary", 3, "click"]], template: function ResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ResourceDeleteComponent_Template_ngb_alert_close_0_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResourceDeleteComponent_ng_template_2_Template, 10, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXNoYm9hcmQtcmVzb3VyY2UvcmVzb3VyY2UtZGVsZXRlL3Jlc291cmNlLWRlbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-delete',
                templateUrl: './resource-delete.component.html',
                styleUrls: ['./resource-delete.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, { context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/dashboard-resource/resource-details/resource-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/dashboard-resource/resource-details/resource-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ResourceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsComponent", function() { return ResourceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResourceDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResourceDetailsComponent.ɵfac = function ResourceDetailsComponent_Factory(t) { return new (t || ResourceDetailsComponent)(); };
ResourceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceDetailsComponent, selectors: [["app-resource-details"]], decls: 2, vars: 0, template: function ResourceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resource-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXNoYm9hcmQtcmVzb3VyY2UvcmVzb3VyY2UtZGV0YWlscy9yZXNvdXJjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-details',
                templateUrl: './resource-details.component.html',
                styleUrls: ['./resource-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/dashboard-resource/resource-form/resource-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/dashboard-resource/resource-form/resource-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResourceFormContent, ResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFormContent", function() { return ResourceFormContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFormComponent", function() { return ResourceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







const _c0 = ["container"];
function ResourceFormComponent_ng_template_2_Template(rf, ctx) { }
// tslint:disable-next-line: component-class-suffix
class ResourceFormContent {
    constructor(http, route, router, service) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.service = service;
        this.message = 'Please fill the following form then click submit button';
    }
    ngAfterViewInit() {
        this.modal = this.openModal();
        this.initData();
    }
    ngAfterContentInit() {
    }
    initData() {
        const resource = history.state.resource;
        if (resource) {
            this.formGroup.patchValue(resource);
        }
        this.isEdit = this.route.snapshot.routeConfig.path.includes('edit');
        this.title = this.isEdit ? 'Edit Resource' : 'Create Resource';
        if (this.isEdit && !resource) {
            return this.ok();
        }
    }
    submit() {
        this.tryCreateResource();
        this.tryUpdateResource();
    }
    ok() {
        if (this.modal) {
            this.modal.dismiss();
        }
        else {
            this.service.dismissAll();
        }
        // this.router.navigate(['../'], { relativeTo: this.route });
        history.back();
    }
    tryCreateResource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isEdit) {
                return;
            }
            const result = yield this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]
                .prepareUrl(this.postUrl(), this.route.snapshot.params), this.formGroup.value)
                .toPromise();
            console.log(result);
            if (result) {
                this.ok();
            }
        });
    }
    tryUpdateResource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isEdit) {
                return;
            }
            const result = yield this.http
                .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]
                .prepareUrl(this.putUrl(), this.route.snapshot.params), this.formGroup.value)
                .toPromise();
            if (result) {
                this.ok();
            }
        });
    }
}
ResourceFormContent.ɵfac = function ResourceFormContent_Factory(t) { return new (t || ResourceFormContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
ResourceFormContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceFormContent, selectors: [["app-resource-form-content"]], decls: 2, vars: 0, template: function ResourceFormContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceFormContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resource-form-content',
                template: '<h1>Hello</h1>'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }]; }, null); })();
class ResourceFormComponent {
    constructor(route, modalService, resolver) {
        this.route = route;
        this.modalService = modalService;
        this.resolver = resolver;
    }
    ngAfterViewInit() {
        const options = {
            size: 'md',
            backdrop: 'static',
        };
        const type = ResourceFormComponent.TYPES.get(this.route.snapshot.data.component);
        console.log(type);
        const factory = this.resolver.resolveComponentFactory(type);
        const component = this.container.createComponent(factory);
        this.content = component.instance;
        this.modal = this.modalService.open(component.instance, options);
    }
    ngOnDestroy() {
        if (this.modal != null) {
            this.modal.dismiss();
            return;
        }
        this.modalService.dismissAll();
    }
    ok() {
    }
}
ResourceFormComponent.TYPES = new Map();
ResourceFormComponent.ɵfac = function ResourceFormComponent_Factory(t) { return new (t || ResourceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
ResourceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceFormComponent, selectors: [["app-resource-form"]], viewQuery: function ResourceFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 4, vars: 1, consts: [["type", "info", 3, "close"], ["container", ""]], template: function ResourceFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function ResourceFormComponent_Template_ngb_alert_close_0_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResourceFormComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.content == null ? null : ctx.content.message);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXNoYm9hcmQtcmVzb3VyY2UvcmVzb3VyY2UtZm9ybS9yZXNvdXJjZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resource-form',
                templateUrl: './resource-form.component.html',
                styleUrls: ['./resource-form.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/dashboard-resource/table-view/table-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dashboard-resource/table-view/table-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: TableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewComponent", function() { return TableViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TableViewComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, prop_r2.title));
} }
function TableViewComponent_tr_17_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    const element_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getDataItem(prop_r6, element_r3));
} }
function TableViewComponent_tr_17_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_tr_17_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const a_r8 = ctx.$implicit; const element_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.do(element_r3, a_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", a_r8.icon, " mx-1");
} }
function TableViewComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_tr_17_td_1_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_tr_17_i_3_Template, 1, 3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.context.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.context.actions);
} }
class TableViewComponent {
    constructor(notifier, router, route) {
        this.notifier = notifier;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        if (!this.context) {
            this.notifier.error('Something went wrong, Table context is null');
            // Default context
            this.context = {
                urls: {
                    createUrl: '<>',
                    detailsUrl: '<>'
                },
                title: 'List',
                data: [],
                properties: []
            };
        }
        if (!this.context.actions) {
            this.context.actions = [];
        }
        this.context.actions.push({
            // icon: 'fa fa-info-circle',
            icon: 'nc-icon nc-alert-circle-i',
            type: 'url',
            url: this.context.urls.editUrl || ':id/details'
        });
        this.context.actions.push({
            // icon: 'fa fa-edit',
            icon: 'nc-icon nc-tag-content',
            type: 'url',
            url: this.context.urls.editUrl || ':id/edit'
        });
        this.context.actions.push({
            // icon: 'fa fa-trash-o',
            icon: 'nc-icon nc-simple-remove',
            type: 'url',
            url: this.context.urls.deleteUrl || ':id/delete'
        });
        console.log(this.context.properties);
    }
    do(e, a) {
        switch (a.type) {
            case 'callback':
                a.callback(e);
                break;
            case 'url':
                // tslint:disable-next-line: no-string-literal
                this.router.navigate([a.url.replace(':id', e['id'])], { relativeTo: this.route, state: { resource: e }, });
                break;
        }
    }
    getDataItem(p, e) {
        let value = e;
        let x = true;
        p.key.split('.').forEach(i => {
            value = value[i];
            if (value == null || value === undefined) {
                x = false;
                return;
            }
        });
        if (!x) {
            return '';
        }
        switch (p.type) {
            case 'string':
                return value.toString();
            case 'int':
                return Number.parseInt(value.toString(), 10).toString();
            case 'float':
                return Number.parseFloat(value.toString()).toString();
            case 'date':
                return new Date(value.toString()).toLocaleDateString();
            case 'time':
                return new Date(value.toString()).toLocaleTimeString();
            case 'datetime':
                return new Date(value.toString()).toLocaleString();
        }
    }
}
TableViewComponent.ɵfac = function TableViewComponent_Factory(t) { return new (t || TableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableViewComponent, selectors: [["app-table-view"]], inputs: { context: "context" }, decls: 18, vars: 4, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "btn", "btn-primary", "btn-rounded", "pull-right", 3, "routerLink"], [1, "card-title"], [1, "card-body"], [1, "table-responsive", "overflow-hidden"], [1, "table"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [1, "text-right"], [1, "text-right", "actions"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TableViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_th_13_Template, 3, 3, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableViewComponent_tr_17_Template, 4, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.context.urls.createUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.context.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.context.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.context.data);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".actions[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin: 1pt !important;\n  padding: 2pt !important;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.actions[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Rhc2hib2FyZC1yZXNvdXJjZS90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGFzaGJvYXJkLXJlc291cmNlL3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zPmkge1xyXG4gICAgbWFyZ2luOiAxcHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJwdCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uYWN0aW9ucz5pOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-view',
                templateUrl: './table-view.component.html',
                styleUrls: ['./table-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~brands-brands-module~categories-categories-module~orders-orders-module~permissions-permissio~4f26d693.js.map