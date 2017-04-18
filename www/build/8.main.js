webpackJsonp([8],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library__ = __webpack_require__(899);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageModule", function() { return LibraryPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LibraryPageModule = (function () {
    function LibraryPageModule() {
    }
    return LibraryPageModule;
}());
LibraryPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__library__["a" /* LibraryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__library__["a" /* LibraryPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__library__["a" /* LibraryPage */]
        ]
    })
], LibraryPageModule);

//# sourceMappingURL=library.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryPage = (function () {
    function LibraryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.topics = [
            {
                name: 'Tetragrams',
                description: 'description',
                page: 'LibraryTetragramsPage'
            },
            {
                name: 'Houses',
                description: 'description',
                page: 'LibraryHousesPage'
            }
        ];
    }
    LibraryPage.prototype.showPage = function (page) {
        this.navCtrl.push(page);
    };
    return LibraryPage;
}());
LibraryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/library/library.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Library\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item *ngFor="let topic of topics"\n      (click)="showPage(topic.page)">\n      <h1>{{topic.name}}</h1>\n      <p>{{topic.description}}</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/library/library.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map