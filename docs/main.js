(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/ecommerce-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.HomeComponent = HomeComponent;
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "home works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false,
    firebase: {
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.DashboardComponent = DashboardComponent;
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "dashboard works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! ./header/header.component */ "fECr");
const i2 = __webpack_require__(/*! @angular/router */ "tyNb");
const i3 = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
class AppComponent {
    constructor() {
        this.title = 'ecommere-ui';
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-header");
        i0.ɵɵelement(1, "router-outlet");
        i0.ɵɵelement(2, "app-footer");
    } }, directives: [i1.HeaderComponent, i2.RouterOutlet, i3.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const fire_1 = __webpack_require__(/*! @angular/fire */ "spgP");
const forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "vY5A");
const app_component_1 = __webpack_require__(/*! ./app.component */ "Sy1n");
const environment_1 = __webpack_require__(/*! ../environments/environment */ "AytR");
const header_component_1 = __webpack_require__(/*! ./header/header.component */ "fECr");
const loader_component_1 = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
const home_component_1 = __webpack_require__(/*! ./home/home.component */ "9vUh");
const login_component_1 = __webpack_require__(/*! ./login/login.component */ "vtpD");
const dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
const cart_component_1 = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
const search_component_1 = __webpack_require__(/*! ./search/search.component */ "tq2C");
const footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/fire */ "spgP");
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        header_component_1.HeaderComponent,
        loader_component_1.LoaderComponent,
        home_component_1.HomeComponent,
        login_component_1.LoginComponent,
        dashboard_component_1.DashboardComponent,
        cart_component_1.CartComponent,
        search_component_1.SearchComponent,
        footer_component_1.FooterComponent], imports: [platform_browser_1.BrowserModule,
        forms_1.FormsModule,
        app_routing_module_1.AppRoutingModule, i1.AngularFireModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    header_component_1.HeaderComponent,
                    loader_component_1.LoaderComponent,
                    home_component_1.HomeComponent,
                    login_component_1.LoginComponent,
                    dashboard_component_1.DashboardComponent,
                    cart_component_1.CartComponent,
                    search_component_1.SearchComponent,
                    footer_component_1.FooterComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    forms_1.FormsModule,
                    app_routing_module_1.AppRoutingModule,
                    fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase)
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CartComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.CartComponent = CartComponent;
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CartComponent, selectors: [["app-cart"]], decls: 2, vars: 0, template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "cart works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const app_1 = __webpack_require__(/*! firebase/app */ "Wcq6");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
const i2 = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
const i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h1");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 2);
    i0.ɵɵlistener("click", function HeaderComponent_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.logout(); });
    i0.ɵɵtext(4, "Logout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Hello ", user_r3.displayName, "!");
} }
function HeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Please login.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function HeaderComponent_ng_template_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.login(); });
    i0.ɵɵtext(3, "Login with Google");
    i0.ɵɵelementEnd();
} }
class HeaderComponent {
    constructor(firestore, auth) {
        this.auth = auth;
    }
    login() {
        this.auth.signInWithPopup(new app_1.auth.GoogleAuthProvider());
    }
    logout() {
        this.auth.signOut();
    }
    ngOnInit() {
    }
}
exports.HeaderComponent = HeaderComponent;
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.AngularFirestore), i0.ɵɵdirectiveInject(i2.AngularFireAuth)); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["showLogin", ""], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeaderComponent_div_0_Template, 5, 1, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, HeaderComponent_ng_template_2_Template, 4, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.auth.user))("ngIfElse", _r1);
    } }, directives: [i3.NgIf], pipes: [i3.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less']
            }]
    }], function () { return [{ type: i1.AngularFirestore }, { type: i2.AngularFireAuth }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.FooterComponent = FooterComponent;
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "u-marg-b-xs", "u-pad-x-xs", "u-bg--white"], [1, "c-container", "c-gutters", "u-pad-y-md", "u-align-center", "u-align-center@sm"], [1, "u-pad-t-xxs"], [1, "t-text--xs", "u-color--brand-purple", "u-marg-r-lg", "u-block@sm", "u-marg-b-sm@sm", "u-marg-r-0@sm"], ["href", "/terms-of-use", 1, "t-link", "t-link--opac", "t-link--underline", "t-link--opac", "t-text--xs", "u-relative", "u-inline-block", "u-color--brand-purple", "u-marg-r-lg", "u-marg-b-sm@sm", "u-marg-r-xs@sm"], ["href", "/privacy-policy", 1, "t-link", "t-link--opac", "t-link--underline", "t-link--opac", "t-text--xs", "u-relative", "u-inline-block", "u-color--brand-purple", "u-marg-r-lg", "u-marg-b-sm@sm", "u-marg-r-xs@sm"], ["href", "/copyright-policy", 1, "t-link", "t-link--opac", "t-link--underline", "t-link--opac", "t-text--xs", "u-relative", "u-inline-block", "u-color--brand-purple", "u-marg-r-lg", "u-marg-r-0@sm", "u-marg-b-sm@sm"], [1, "t-text--xs", "u-relative", "u-color--brand-purple", "u-inline-block", "u-force-3d", "u-fit-w@sm"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Copyright \u00A9 V.V.S.K");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", 4);
        i0.ɵɵtext(6, "Terms of use");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "a", 5);
        i0.ɵɵtext(8, "Privacy Policy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "a", 6);
        i0.ɵɵtext(10, "Copyright Policy");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.LoaderComponent = LoaderComponent;
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "loader works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.SearchComponent = SearchComponent;
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "search works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/router */ "tyNb");
const routes = [];
class AppRoutingModule {
}
exports.AppRoutingModule = AppRoutingModule;
AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.LoginComponent = LoginComponent;
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "login works!");
        i0.ɵɵelementEnd();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "AytR");
const __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "ZAI4");
const __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map