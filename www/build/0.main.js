webpackJsonp([0],{

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tetragram__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__ = __webpack_require__(887);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetragramPageModule", function() { return TetragramPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TetragramPageModule = (function () {
    function TetragramPageModule() {
    }
    return TetragramPageModule;
}());
TetragramPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__["a" /* TetragramComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramPage */]
        ]
    })
], TetragramPageModule);

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tetragram__ = __webpack_require__(888);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TetragramComponentModule = (function () {
    function TetragramComponentModule() {
    }
    return TetragramComponentModule;
}());
TetragramComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* TetragramComponent */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* TetragramComponent */]
        ]
    })
], TetragramComponentModule);

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TetragramComponent = (function () {
    function TetragramComponent() {
    }
    TetragramComponent.prototype.renderRow = function (key) {
        if (key == 0) {
            return '0';
        }
        else if (key == 1) {
            return '0    0';
        }
    };
    return TetragramComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tetragram__["a" /* Tetragram */])
], TetragramComponent.prototype, "tetragram", void 0);
TetragramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/'<!-- Generated template for the TetragramComponent component -->\n<div>\n  {{renderRow(tetragram.row0)}}\n</div>\n<div>\n  {{renderRow(tetragram.row1)}}\n</div>\n<div>\n  {{renderRow(tetragram.row2)}}\n</div>\n<div>\n  {{renderRow(tetragram.row3)}}\n</div>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/
    }),
    __metadata("design:paramtypes", [])
], TetragramComponent);

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TetragramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TetragramPage = (function () {
    function TetragramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tetragram = navParams.get('tetragram');
        console.log(this.tetragram);
        this.house = navParams.get('house');
    }
    TetragramPage.prototype.ionViewDidLoad = function () {
    };
    return TetragramPage;
}());
TetragramPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/tetragram/tetragram.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{tetragram.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="font-size: 200%;">\n    <tetragram [tetragram]="tetragram"></tetragram>\n  </div>\n  <p>{{tetragram.desc}}</p>\n  <div *ngIf="house">\n    <h1>{{tetragram.name}} in house #{{house}}</h1>\n    <p>{{tetragram.houseMeanings[house - 1]}}</p>\n  </div>\n  <div *ngIf="!house">\n    <h1>Houses</h1>\n    <ol>\n      <li *ngFor="let meaning of tetragram.houseMeanings">\n        {{houseMeanings}}\n      </li>\n    </ol>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/tetragram/tetragram.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TetragramPage);

//# sourceMappingURL=tetragram.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map