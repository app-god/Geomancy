webpackJsonp([8],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    return TutorialPageModule;
}());
TutorialPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
        ]
    })
], TutorialPageModule);

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        this.storage.set('hasSeenTutorial', true);
        this.navCtrl.setRoot('NewPage');
    };
    TutorialPage.prototype.onSlideChange = function (slides) {
        this.showSkip = !slides.isEnd();
    };
    return TutorialPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/tutorial/tutorial.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides #slides pager (ionSlideWillChange)="onSlideChange($event)" color="primary">\n\n    <ion-slide>\n      <h2>Welcome to <b>Geomancy</b></h2>\n      <p>\n        <b>Geomancy</b> ("earth divination") is a method of divination that interprets markings on the ground or the patterns formed by tossed handfuls of soil, rocks, or sand.\n      </p>\n      <p>\n        The most prevalent form of <b>geomancy</b> involves interpreting a series of 16 figures formed by a randomized process that involves recursion followed by analyzing them, often augmented with astrological interpretations.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>A little bit of history</h2>\n      <p>\n        <b>Geomancy</b> was one of the most popular forms of divination throughout Africa and Europe, particularly during the Middle Ages and the Renaissance.  It was practiced by people from all social classes.\n      </p>\n      <p>\n        In Renaissance magic, <b>geomancy</b> was classified as one of the seven "forbidden arts", along with necromancy, hydromancy, aeromancy, pyromancy, chiromancy (palmistry), and spatulamancy (scapulimancy).\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <button ion-button icon-right large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n    \n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/tutorial/tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map