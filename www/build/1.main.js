webpackJsonp([1],{

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_overview__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__ = __webpack_require__(891);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingOverviewPageModule", function() { return ReadingOverviewPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReadingOverviewPageModule = (function () {
    function ReadingOverviewPageModule() {
    }
    return ReadingOverviewPageModule;
}());
ReadingOverviewPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reading_overview__["a" /* ReadingOverviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_overview__["a" /* ReadingOverviewPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__["a" /* TetragramComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reading_overview__["a" /* ReadingOverviewPage */]
        ]
    })
], ReadingOverviewPageModule);

//# sourceMappingURL=reading-overview.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tetragram__ = __webpack_require__(892);
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

/***/ 892:
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
            return '●';
        }
        else if (key == 1) {
            return '●    ●';
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
        selector: 'tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/'<div class="tetragram">\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row0)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row1)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row2)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row3)}}\n  </div>\n</div>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/
    }),
    __metadata("design:paramtypes", [])
], TetragramComponent);

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingOverviewPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadingOverviewPage = (function () {
    function ReadingOverviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.warnings = [];
        this.parent = navParams.get('parent');
        this.reading = this.parent.reading;
        var house1Tetragram = this.reading.getTetragramForHouse(1);
        if (house1Tetragram.name == 'Rubeus'
            || house1Tetragram.name == 'Cauda Draconis') {
            var message = house1Tetragram.name + ' is in the first house.';
            this.warnings.push(message);
        }
    }
    ReadingOverviewPage.prototype.ionViewWillEnter = function () {
        this.parent.title = 'Overview';
        this.parent.helpTopic = 'reading overview';
    };
    return ReadingOverviewPage;
}());
ReadingOverviewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-reading-overview',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/reading-overview/reading-overview.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="big">\n    <ion-row>\n      <ion-col col-4>\n        Question:\n      </ion-col>\n      <ion-col col-8>\n        {{reading.question}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        Topic:\n      </ion-col>\n      <ion-col col-8>\n        {{reading.topic}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <br>\n\n  <div>\n    <h3>General Interpretation</h3>\n    <ion-card no-margin>\n      <ion-card-content>\n        <div *ngIf="reading.judge.good && reading.witness0.good && reading.witness1.good">\n          Good\n        </div>\n        <div *ngIf="!reading.judge.good && !reading.witness0.good && !reading.witness1.good">\n          Bad\n        </div>\n        <div *ngIf="reading.judge.good && !reading.witness0.good && !reading.witness1.good">\n          Unfortunate in the end\n        </div>\n        <div *ngIf="reading.judge.good && reading.witness0.good && !reading.witness1.good">\n          Good beginning will take an unfortunate turn\n        </div>\n        <div *ngIf="reading.judge.good && !reading.witness0.good && reading.witness1.good">\n          Unfortunate beginning will take a good turn\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="warnings.length > 0">\n    <h3>Warning</h3>\n    <ion-card no-margin color="danger" *ngFor="let warning of warnings">\n      <ion-card-content>\n        {{warning}}\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/reading-overview/reading-overview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ReadingOverviewPage);

//# sourceMappingURL=reading-overview.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map