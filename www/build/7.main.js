webpackJsonp([7],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_reading__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reading_reading__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RandomPage = (function () {
    function RandomPage(navCtrl, navParams, storage, modCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modCtrl = modCtrl;
        this.viewCtrl = viewCtrl;
        var question = navParams.get('question');
        if (question == '') {
            question = "(blank)";
        }
        this.reading = new __WEBPACK_IMPORTED_MODULE_2__models_reading__["a" /* Reading */](question);
        storage.ready().then(function () {
            storage.get('history').then(function (history) {
                history = history || [];
                history.push(_this.reading);
                storage.set('history', history);
                console.log(_this.reading);
                console.log(history);
            });
        });
        // let modReading = this.modCtrl.create(ReadingPage, { reading: this.reading })
        // modReading.present()
        // this.viewCtrl.dismiss()
        this.navCtrl.pop(null, function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reading_reading__["a" /* ReadingPage */], { reading: _this.reading });
        });
    }
    RandomPage.prototype.ionViewDidLoad = function () {
    };
    return RandomPage;
}());
RandomPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-random',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/random/random.html"*/'<!--\n  Generated template for the RandomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>random</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/random/random.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _e || Object])
], RandomPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=random.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reading; });

var Reading = (function () {
    function Reading(question) {
        this.question = question;
        this.date = Date.now();
        this.mother0 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */]();
        this.mother1 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */]();
        this.mother2 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */]();
        this.mother3 = new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */]();
        this.mothers = [this.mother0, this.mother1, this.mother2, this.mother3];
        this.daughter0 = this.createKeyFromRows(this.mother0.row0, this.mother1.row0, this.mother2.row0, this.mother3.row0);
        this.daughter1 = this.createKeyFromRows(this.mother0.row1, this.mother1.row1, this.mother2.row1, this.mother3.row1);
        this.daughter2 = this.createKeyFromRows(this.mother0.row2, this.mother1.row2, this.mother2.row2, this.mother3.row2);
        this.daughter3 = this.createKeyFromRows(this.mother0.row3, this.mother1.row3, this.mother2.row3, this.mother3.row3);
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
    }
    Reading.prototype.createKeyFromRows = function (row0, row1, row2, row3) {
        var r0 = row0 % 2;
        var r1 = row1 % 2;
        var r2 = row2 % 2;
        var r3 = row3 % 2;
        var key = (r3 << 3) + (r2 << 2) + (r1 << 1) + (r0 << 0);
        return new __WEBPACK_IMPORTED_MODULE_0__tetragram__["a" /* Tetragram */](key);
    };
    return Reading;
}());

//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__random__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPageModule", function() { return RandomPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RandomPageModule = (function () {
    function RandomPageModule() {
    }
    return RandomPageModule;
}());
RandomPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__random__["a" /* RandomPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__random__["a" /* RandomPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__random__["a" /* RandomPage */]
        ]
    })
], RandomPageModule);

//# sourceMappingURL=random.module.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map