webpackJsonp([8],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
            ]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = /** @class */ (function () {
    function HistoryPage(app, navCtrl, storage, modCtrl, alertCtrl, viewCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modCtrl = modCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.readings = [];
    }
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.loadReadings();
    };
    HistoryPage.prototype.loadReadings = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                if (history) {
                    _this.readings = history.sort(_this.sortReadings);
                }
            });
        });
    };
    HistoryPage.prototype.sortReadings = function (a, b) {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    };
    HistoryPage.prototype.showReading = function (readingData) {
        this.app.getRootNav().push('ReadingPage', {
            question: readingData.question,
            topic: readingData.topic,
            date: readingData.date,
            key0: readingData.key0,
            key1: readingData.key1,
            key2: readingData.key2,
            key3: readingData.key3,
        });
    };
    HistoryPage.prototype.deleteReading = function (reading) {
        var _this = this;
        var readingIndex = this.readings.indexOf(reading);
        this.readings.splice(readingIndex, 1);
        this.storage.ready().then(function () {
            _this.storage.set('history', _this.readings);
        });
    };
    HistoryPage.prototype.deleteAllReadings = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Deletion',
            message: 'Do you want to delete all of your readings?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.storage.ready().then(function () {
                            _this.storage.set('history', []);
                        });
                        _this.loadReadings();
                    }
                }
            ]
        });
        alert.present();
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/pages/history/history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="navCtrl.popToRoot()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Load Reading\n    </ion-title>\n    <ion-buttons end *ngIf="readings.length > 0">\n      <button ion-button icon-only (click)="deleteAllReadings()">\n        <ion-icon name="ios-trash" color="danger"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="center" *ngIf="readings.length == 0">\n    Save a reading and it will show up here.\n  </div>\n\n  <ion-list margin *ngIf="readings.length > 0">\n\n    <ion-item-sliding *ngFor="let reading of readings">\n\n      <button ion-item (click)="showReading(reading)">\n        <div class="question" text-wrap>{{reading.question || \'No question\'}}</div>\n        <div class="topic">{{reading.topic || \'No topic\'}}</div>\n        <div class="date">{{reading.date | date:\'medium\'}}</div>\n      </button>\n\n      <ion-item-options side="right">\n        <button ion-button (click)="deleteReading(reading)"\n          color="danger">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/pages/history/history.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _f || Object])
    ], HistoryPage);
    return HistoryPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=8.js.map