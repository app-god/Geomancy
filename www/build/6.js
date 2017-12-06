webpackJsonp([6],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingPageModule", function() { return ReadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new_module__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReadingPageModule = /** @class */ (function () {
    function ReadingPageModule() {
    }
    ReadingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__new_new_module__["NewPageModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__reading__["a" /* ReadingPage */]
            ]
        })
    ], ReadingPageModule);
    return ReadingPageModule;
}());

//# sourceMappingURL=reading.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house_info__ = __webpack_require__(197);

var House = /** @class */ (function () {
    function House(number) {
        this.number = number;
        var info = __WEBPACK_IMPORTED_MODULE_0__house_info__["a" /* houseInfo */].find(function (i) { return i.number === number; });
        this.title = info.title;
        this.description = info.description;
        this.topics = info.topics.sort();
        this.phrase = info.phrase;
        this.sign = info.sign;
    }
    House.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    House.houses = House.numbers.map(function (number) { return new House(number); });
    return House;
}());

//# sourceMappingURL=house.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placement_type__ = __webpack_require__(290);


var Placement = /** @class */ (function () {
    function Placement(house, tetragram) {
        // determine type
        var _this = this;
        this.house = house;
        this.tetragram = tetragram;
        // is placement a warning?
        if (this.house.number == 1) {
            if (['Rubeus', 'Cauda Draconis'].indexOf(this.tetragram.name) >= 0) {
                this.setTypeIfUndefined(__WEBPACK_IMPORTED_MODULE_1__placement_type__["a" /* PlacementType */].Warning);
            }
        }
        // is placement an accidental dignitary?
        var keys = ['rules', 'exalted', 'triplicity', 'detriment', 'fall'];
        keys.forEach(function (key) {
            if (_this.tetragram[key].indexOf(_this.house.number) >= 0) {
                _this.setTypeIfUndefined(Object(__WEBPACK_IMPORTED_MODULE_1__placement_type__["e" /* getTypeFromKey */])(key));
            }
        });
        // if placement isn't any of the others, it's weak
        this.setTypeIfUndefined(__WEBPACK_IMPORTED_MODULE_1__placement_type__["a" /* PlacementType */].Weak);
    }
    Placement.prototype.getMeaning = function () {
        return this.tetragram.getHouseMeaning(this.house.number);
    };
    Placement.prototype.getPhrase = function () {
        return this.tetragram.phrase + ' in ' + this.house.phrase + '.';
    };
    Placement.prototype.setTypeIfUndefined = function (type) {
        if (this.type === undefined) {
            this.type = type;
        }
    };
    Placement.prototype.getTypeAsString = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__placement_type__["b" /* getTypeAsString */])(this.type);
    };
    Placement.prototype.getTypeColor = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__placement_type__["d" /* getTypeColor */])(this.type);
    };
    Placement.getPlacementsForTetragram = function (tetragram) {
        var placements = __WEBPACK_IMPORTED_MODULE_0__house__["a" /* House */].houses.map(function (house) {
            return new Placement(house, tetragram);
        });
        return placements;
    };
    return Placement;
}());

//# sourceMappingURL=placement.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTypeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTypeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTypeFromKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTypeAsStringFromKey; });
var PlacementType;
(function (PlacementType) {
    PlacementType[PlacementType["Warning"] = 0] = "Warning";
    PlacementType[PlacementType["Strongest"] = 1] = "Strongest";
    PlacementType[PlacementType["VeryStrong"] = 2] = "VeryStrong";
    PlacementType[PlacementType["Strong"] = 3] = "Strong";
    PlacementType[PlacementType["Weak"] = 4] = "Weak";
    PlacementType[PlacementType["VeryWeak"] = 5] = "VeryWeak";
    PlacementType[PlacementType["Weakest"] = 6] = "Weakest";
})(PlacementType || (PlacementType = {}));
var getTypeAsString = function (type) {
    switch (type) {
        case PlacementType.Warning:
            return 'Warning';
        case PlacementType.Strongest:
            return 'Extremely Strong';
        case PlacementType.VeryStrong:
            return 'Very Strong';
        case PlacementType.Strong:
            return 'Strong';
        case PlacementType.Weak:
            return 'Weak';
        case PlacementType.VeryWeak:
            return 'Very Weak';
        case PlacementType.Weakest:
            return 'Extremely Weak';
    }
};
var getTypeColor = function (type) {
    switch (type) {
        case PlacementType.Warning:
            return 'warning';
        case PlacementType.Strongest:
            return 'strongest';
        case PlacementType.VeryStrong:
            return 'very-strong';
        case PlacementType.Strong:
            return 'strong';
        case PlacementType.Weak:
            return 'weak';
        case PlacementType.VeryWeak:
            return 'very-weak';
        case PlacementType.Weakest:
            return 'weakest';
    }
};
var getTypeFromKey = function (key) {
    switch (key) {
        case 'warning':
            return PlacementType.Warning;
        case 'rules':
            return PlacementType.Strongest;
        case 'exalted':
            return PlacementType.VeryStrong;
        case 'triplicity':
            return PlacementType.Strong;
        case 'detriment':
            return PlacementType.VeryWeak;
        case 'fall':
            return PlacementType.Weakest;
        default:
            return PlacementType.Weak;
    }
};
var getTypeAsStringFromKey = function (key) {
    return getTypeAsString(getTypeFromKey(key));
};
//# sourceMappingURL=placement.type.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placement__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tetragram__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__house__ = __webpack_require__(287);



var Reading = /** @class */ (function () {
    function Reading(data) {
        var _this = this;
        this.readingData = data;
        this.question = data.question;
        this.topic = data.topic;
        this.date = data.date;
        this.mother0 = new __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */](data.key0);
        this.mother1 = new __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */](data.key1);
        this.mother2 = new __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */](data.key2);
        this.mother3 = new __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */](data.key3);
        this.daughter0 = this.createFromRows(this.mother0.getRow(1), this.mother1.getRow(1), this.mother2.getRow(1), this.mother3.getRow(1));
        this.daughter1 = this.createFromRows(this.mother0.getRow(2), this.mother1.getRow(2), this.mother2.getRow(2), this.mother3.getRow(2));
        this.daughter2 = this.createFromRows(this.mother0.getRow(3), this.mother1.getRow(3), this.mother2.getRow(3), this.mother3.getRow(3));
        this.daughter3 = this.createFromRows(this.mother0.getRow(4), this.mother1.getRow(4), this.mother2.getRow(4), this.mother3.getRow(4));
        this.nephew0 = this.mother0.add(this.mother1);
        this.nephew1 = this.mother2.add(this.mother3);
        this.nephew2 = this.daughter0.add(this.daughter1);
        this.nephew3 = this.daughter2.add(this.daughter3);
        this.witness0 = this.nephew0.add(this.nephew1);
        this.witness1 = this.nephew2.add(this.nephew3);
        this.judge = this.witness0.add(this.witness1);
        this.reconciler = this.mother0.add(this.judge);
        this.partOfFortune = this.getPartOfFortune();
        this.houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .map(function (houseNumber) {
            return new __WEBPACK_IMPORTED_MODULE_2__house__["a" /* House */](houseNumber);
        });
        this.placements = this.houses
            .map(function (house) {
            var tetragram = _this.getTetragramForHouseNumber(house.number);
            return new __WEBPACK_IMPORTED_MODULE_0__placement__["a" /* Placement */](house, tetragram);
        });
    }
    Reading.prototype.createFromRows = function (row1, row2, row3, row4) {
        var key = __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */].generateKey(row1, row2, row3, row4);
        return new __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* Tetragram */](key);
    };
    Reading.prototype.getTetragramForHouseNumber = function (houseNumber) {
        var tetragrams = [
            this.mother1, this.daughter1, this.nephew1,
            this.mother2, this.daughter2, this.nephew2,
            this.mother3, this.daughter3, this.nephew3,
            this.mother0, this.daughter0, this.nephew0
        ];
        return tetragrams[houseNumber - 1];
    };
    Reading.prototype.getPlacementForHouseNumber = function (houseNumber) {
        return this.placements[houseNumber - 1];
    };
    Reading.prototype.getPartOfFortune = function () {
        /*
          return house number where Part of Fortune resides
        */
        var partOfFortune = [
            this.mother0, this.mother1, this.mother2, this.mother3,
            this.daughter0, this.daughter1, this.daughter2, this.daughter3,
            this.nephew0, this.nephew1, this.nephew2, this.nephew3
        ].map(function (tetragram) {
            return tetragram.dots;
        }).reduce(function (a, b) {
            return a + b;
        }, 0) % 12;
        if (partOfFortune == 0) {
            partOfFortune = 12;
        }
        return partOfFortune;
    };
    Reading.prototype.getQuestion = function () {
        return this.question || 'Your question remains hidden';
    };
    Reading.prototype.getReadingData = function () {
        return this.readingData;
    };
    Reading.prototype.getHouse = function (number) {
        return this.houses[number - 1];
    };
    Reading.prototype.getTopicPlacement = function () {
        var _this = this;
        if (!this.topic)
            return null;
        return this.placements.find(function (placement) {
            return placement.house.topics.indexOf(_this.topic) >= 0;
        });
    };
    return Reading;
}());

//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reading__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadingPage = /** @class */ (function () {
    function ReadingPage(app, navCtrl, navParams, storage, actionCtrl, viewCtrl, alertCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.actionCtrl = actionCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.saved = false;
        console.log('views:', navCtrl.getViews());
        var readingData = {
            question: navParams.get('question'),
            topic: navParams.get('topic'),
            date: parseInt(navParams.get('date')),
            key0: parseInt(navParams.get('key0')),
            key1: parseInt(navParams.get('key1')),
            key2: parseInt(navParams.get('key2')),
            key3: parseInt(navParams.get('key3'))
        };
        this.reading = new __WEBPACK_IMPORTED_MODULE_3__models_reading__["a" /* Reading */](readingData);
        this.rootParams = {
            parent: this
        };
    }
    ReadingPage.prototype.ionViewDidLoad = function () {
        // check if reading is saved
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                history = history || [];
                var dates = history.map(function (h) { return h.date; });
                if (dates.indexOf(_this.reading.date) >= 0) {
                    _this.saved = true;
                }
                else {
                    _this.saved = false;
                }
            });
        });
    };
    ReadingPage.prototype.goBack = function () {
        console.log('can go back: ', this.navCtrl.canGoBack());
        if (this.navCtrl.canGoBack()) {
            this.app.getRootNav().pop();
        }
        else {
            this.app.getRootNav().setRoot('page-new');
        }
    };
    ReadingPage.prototype.clickBack = function () {
        var _this = this;
        if (this.saved) {
            console.log('saved');
            this.goBack();
        }
        if (!this.saved) {
            console.log('not saved');
            var alert = this.alertCtrl.create({
                title: 'Are you sure you want to leave this reading?',
                message: 'If you leave without saving, this reading will be lost.',
                buttons: [
                    {
                        text: 'Save and Leave',
                        handler: function () {
                            _this.saveReading();
                            _this.goBack();
                        }
                    },
                    {
                        text: 'Leave without Saving',
                        handler: function () {
                            console.log('leaving');
                            _this.goBack();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                ]
            });
            alert.present();
        }
    };
    ReadingPage.prototype.saveReading = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                history = history || [];
                history.push(_this.reading.readingData);
                _this.storage.set('history', history).then(function () {
                    _this.saved = true;
                });
            });
        });
    };
    ReadingPage.prototype.deleteReading = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                var readingIndex = history.indexOf(_this.reading);
                history.splice(readingIndex, 1);
                _this.storage.set('history', history).then(function () {
                    _this.saved = false;
                });
            });
        });
    };
    ReadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reading',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/pages/reading/reading.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="clickBack()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="saveReading()" *ngIf="!saved" class="save">\n        Save\n      </button>\n      <button ion-button (click)="deleteReading()" *ngIf="saved" class="saved">\n        Saved\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs *ngIf="reading">\n  <ion-tab [root]="\'ReadingOverviewPage\'" [rootParams]="rootParams" tabTitle="Overview" tabIcon="eye"></ion-tab>\n  <ion-tab [root]="\'ReadingHousesPage\'"   [rootParams]="rootParams" tabTitle="Placements" tabIcon="home"></ion-tab>\n  <ion-tab [root]="\'ReadingFiguresPage\'"  [rootParams]="rootParams" tabTitle="Figures" tabIcon="grid"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/pages/reading/reading.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object])
    ], ReadingPage);
    return ReadingPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=reading.js.map

/***/ })

});
//# sourceMappingURL=6.js.map