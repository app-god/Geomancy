webpackJsonp([6],{

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading__ = __webpack_require__(903);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingPageModule", function() { return ReadingPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadingPageModule = (function () {
    function ReadingPageModule() {
    }
    return ReadingPageModule;
}());
ReadingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]
        ]
    })
], ReadingPageModule);

//# sourceMappingURL=reading.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__house__ = __webpack_require__(526);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reading; });


var Reading = (function () {
    function Reading(data) {
        var _this = this;
        if (data.question == '') {
            this.question = 'None';
        }
        else {
            this.question = data.question;
        }
        this.topic = data.topic;
        this.house = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .map(function (number) {
            return new __WEBPACK_IMPORTED_MODULE_1__house__["a" /* House */](number);
        })
            .find(function (house) {
            return house.topics.indexOf(_this.topic) >= 0;
        });
        this.date = data.date;
        this.mother0 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](data.key0);
        this.mother1 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](data.key1);
        this.mother2 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](data.key2);
        this.mother3 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](data.key3);
        this.mothers = [this.mother0, this.mother1, this.mother2, this.mother3];
        this.daughter0 = this.createFromRows(this.mother0.row0, this.mother1.row0, this.mother2.row0, this.mother3.row0);
        this.daughter1 = this.createFromRows(this.mother0.row1, this.mother1.row1, this.mother2.row1, this.mother3.row1);
        this.daughter2 = this.createFromRows(this.mother0.row2, this.mother1.row2, this.mother2.row2, this.mother3.row2);
        this.daughter3 = this.createFromRows(this.mother0.row3, this.mother1.row3, this.mother2.row3, this.mother3.row3);
        this.daughters = [this.daughter0, this.daughter1, this.daughter2, this.daughter3];
        this.nephew0 = this.mother0.add(this.mother1);
        this.nephew1 = this.mother2.add(this.mother3);
        this.nephew2 = this.daughter0.add(this.daughter1);
        this.nephew3 = this.daughter2.add(this.daughter3);
        this.nephews = [this.nephew0, this.nephew1, this.nephew2, this.nephew3];
        this.witness0 = this.nephew0.add(this.nephew1);
        this.witness1 = this.nephew2.add(this.nephew3);
        this.witnesses = [this.witness0, this.witness1];
        this.judge = this.witness0.add(this.witness1);
        this.reconciler = this.mother0.add(this.judge);
        this.partOfFortune = [
            this.mother0, this.mother1, this.mother2, this.mother3,
            this.daughter0, this.daughter1, this.daughter2, this.daughter3,
            this.nephew0, this.nephew1, this.nephew2, this.nephew3
        ].map(function (tetragram) {
            return tetragram.dots;
        }).reduce(function (a, b) {
            return a + b;
        }, 0) % 12;
    }
    Reading.prototype.createFromRows = function (row0, row1, row2, row3) {
        var r0 = row0 % 2;
        var r1 = row1 % 2;
        var r2 = row2 % 2;
        var r3 = row3 % 2;
        var key = (r3 << 3) + (r2 << 2) + (r1 << 1) + (r0 << 0);
        return new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](key);
    };
    Reading.prototype.getTetragramForHouse = function (house) {
        var tetragrams = [
            this.mother1, this.daughter1, this.nephew1,
            this.mother2, this.daughter2, this.nephew2,
            this.mother3, this.daughter3, this.nephew3,
            this.mother0, this.daughter0, this.nephew0
        ];
        return tetragrams[house - 1];
    };
    Reading.prototype.getSignForHouse = function (house) {
        var signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
            'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        var firstSign = this.getTetragramForHouse(0).sign;
        var houseSignIndex = (signs.indexOf(firstSign) + house) % 12;
        return signs[houseSignIndex];
    };
    return Reading;
}());

//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reading__ = __webpack_require__(893);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadingPage = (function () {
    function ReadingPage(navCtrl, navParams, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.title = 'Reading';
        this.reading = new __WEBPACK_IMPORTED_MODULE_3__models_reading__["a" /* Reading */](navParams.get('readingData'));
        this.rootParams = {
            parent: this
        };
    }
    ReadingPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return ReadingPage;
}());
ReadingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-reading',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/reading/reading.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="ios-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs>\n  <ion-tab [root]="\'ReadingOverviewPage\'" [rootParams]="rootParams" tabTitle="Overview" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="\'ReadingHousesPage\'"   [rootParams]="rootParams" tabTitle="Houses" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="\'ReadingFiguresPage\'"  [rootParams]="rootParams" tabTitle="Figures" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/reading/reading.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]) === "function" && _d || Object])
], ReadingPage);

var _a, _b, _c, _d;
//# sourceMappingURL=reading.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map