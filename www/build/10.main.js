webpackJsonp([10],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    return HelpPageModule;
}());
HelpPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]
        ]
    })
], HelpPageModule);

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topic = navParams.get('topic');
    }
    return HelpPage;
}());
HelpPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-capitalize>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div padding *ngIf="topic == \'new reading\'">\n    <h3>What should I ask?</h3>\n\n    <h3>Which topic should I choose?</h3>\n  </div>\n\n  <div *ngIf="topic == \'reading houses\'">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <ion-chip color="secondary">\n            <ion-label>\n              Topic\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col col-8>\n          This house is connected to the topic you selected.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-chip color="secondary">\n            <ion-label>\n              ★★★\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col col-8>\n          The tetragram\'s planet is the ruler of this house.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-chip color="secondary">\n            <ion-label>\n              ★★\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col col-8>\n          The tetragram\'s planet is exalted in this house.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-chip color="secondary">\n            <ion-label>\n              Judge\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col col-8>\n          The tetragram in this house is the same as the judge of this reading.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-chip color="secondary">\n            <ion-label>\n              Part of Fortune\n            </ion-label>\n          </ion-chip>\n        </ion-col>\n        <ion-col col-8>\n          This house is a potential source of wealth.\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map