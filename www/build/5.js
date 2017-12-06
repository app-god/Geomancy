webpackJsonp([5],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingFiguresPageModule", function() { return ReadingFiguresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_figures__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReadingFiguresPageModule = /** @class */ (function () {
    function ReadingFiguresPageModule() {
    }
    ReadingFiguresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__["a" /* TetragramComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */]
            ]
        })
    ], ReadingFiguresPageModule);
    return ReadingFiguresPageModule;
}());

//# sourceMappingURL=reading-figures.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house_info__ = __webpack_require__(196);

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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tetragram__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TetragramComponentModule = /** @class */ (function () {
    function TetragramComponentModule() {
    }
    TetragramComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */]
            ]
        })
    ], TetragramComponentModule);
    return TetragramComponentModule;
}());

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placement_type__ = __webpack_require__(289);


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

/***/ 289:
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TetragramComponent = /** @class */ (function () {
    function TetragramComponent() {
        this.color = '';
    }
    TetragramComponent.prototype.ngOnInit = function () {
        if (this.color === 'planet') {
            this.color = this.tetragram.planet.toLowerCase();
        }
        if (this.color === 'element') {
            this.color = this.tetragram.element.toLowerCase();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tetragram__["a" /* Tetragram */])
    ], TetragramComponent.prototype, "tetragram", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TetragramComponent.prototype, "color", void 0);
    TetragramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tetragram',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/components/tetragram/tetragram.html"*/'<div class="tetragram" [ngClass]="color">\n  <div class="tetragram-row">\n    {{tetragram.renderRow(1)}}\n  </div>\n  <div class="tetragram-row">\n    {{tetragram.renderRow(2)}}\n  </div>\n  <div class="tetragram-row">\n    {{tetragram.renderRow(3)}}\n  </div>\n  <div class="tetragram-row">\n    {{tetragram.renderRow(4)}}\n  </div>\n</div>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/components/tetragram/tetragram.html"*/
        })
    ], TetragramComponent);
    return TetragramComponent;
}());

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placement__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tetragram__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__house__ = __webpack_require__(286);



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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingFiguresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_reading__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadingFiguresPage = /** @class */ (function () {
    function ReadingFiguresPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var parent = navParams.get('parent');
        if (parent) {
            this.parent = parent;
            this.reading = parent.reading;
        }
        else {
            this.parent = this;
            this.reading = new __WEBPACK_IMPORTED_MODULE_2__models_reading__["a" /* Reading */](navParams.data);
        }
    }
    ReadingFiguresPage.prototype.showTetragram = function (tetragram, house) {
        this.parent.navCtrl.push('TetragramPage', { tetragram: tetragram });
    };
    ReadingFiguresPage.prototype.ionViewWillEnter = function () {
        this.parent.title = 'Figures';
    };
    ReadingFiguresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reading-figures',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/pages/reading-figures/reading-figures.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-3 (click)="showTetragram(reading.mother3)">\n        <tetragram [tetragram]="reading.mother3" color="planet"></tetragram>\n        <p>Mother 4</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.mother2)">\n        <tetragram [tetragram]="reading.mother2" color="planet"></tetragram>\n        <p>Mother 3</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.mother1)">\n        <tetragram [tetragram]="reading.mother1" color="planet"></tetragram>\n        <p>Mother 2</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.mother0)">\n        <tetragram [tetragram]="reading.mother0" color="planet"></tetragram>\n        <p>Mother 1</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3 (click)="showTetragram(reading.daughter3)">\n        <tetragram [tetragram]="reading.daughter3" color="planet"></tetragram>\n        <p>Daughter 4</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.daughter2)">\n        <tetragram [tetragram]="reading.daughter2" color="planet"></tetragram>\n        <p>Daughter 3</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.daughter1)">\n        <tetragram [tetragram]="reading.daughter1" color="planet"></tetragram>\n        <p>Daughter 2</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.daughter0)">\n        <tetragram [tetragram]="reading.daughter0" color="planet"></tetragram>\n        <p>Daughter 1</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3 (click)="showTetragram(reading.nephew3)">\n        <tetragram [tetragram]="reading.nephew3" color="planet"></tetragram>\n        <p>Nephew 4</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.nephew2)">\n        <tetragram [tetragram]="reading.nephew2" color="planet"></tetragram>\n        <p>Nephew 3</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.nephew1)">\n        <tetragram [tetragram]="reading.nephew1" color="planet"></tetragram>\n        <p>Nephew 2</p>\n      </ion-col>\n      <ion-col col-3 (click)="showTetragram(reading.nephew0)">\n        <tetragram [tetragram]="reading.nephew0" color="planet"></tetragram>\n        <p>Nephew 1</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 (click)="showTetragram(reading.witness1)">\n        <tetragram [tetragram]="reading.witness1" color="planet"></tetragram>\n        <p>Left Witness</p>\n      </ion-col>\n      <ion-col col-6 (click)="showTetragram(reading.witness0)">\n        <tetragram [tetragram]="reading.witness0" color="planet"></tetragram>\n        <p>Right Witness</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 (click)="showTetragram(reading.judge)">\n        <tetragram [tetragram]="reading.judge" color="planet"></tetragram>\n        <p>Judge</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 (click)="showTetragram(reading.reconciler)">\n        <tetragram [tetragram]="reading.reconciler" color="planet"></tetragram>\n        <p>Reconciler</p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <div padding class="help">\n    <h3>What do these figures mean?</h3>\n    <h4>The Mothers</h4>\n    <p>\n      <em>The mothers represent the causes of the answer.</em>\n    </p>\n    <p>\n      The four mothers are the source of the rest of the figures.\n      They are the only figures that are generated by a randomized process.\n      The rest of the figures are generated from an analysis of the four mothers.\n    </p>\n    <h4>The Daughters</h4>\n    <p>\n      <em>The daughters represent the effects of the answer.</em>\n    </p>\n    <p>\n      The four daughters are generated from the four mothers.\n      The first daughter is generated by combining the first rows of each of the four mothers.\n      The second daughter is generated by combining the second rows of each of the four mothers. And so on.\n    </p>\n    <h4>The Nephews</h4>\n    <p>\n      <em>The nephews represent a summary of the causes and effects of the answer.</em>\n    </p>\n    <p>\n      The nephews are generated from adding the mothers and daughters in groups of two.\n      Adding two tetragrams is done by adding each of their rows.\n      If the rows are the same, their sum is two dots. If they are not the same, their sum is one dot.\n    </p>\n    <p>\n      The first nephew is generated by adding the first and second mother. The second nephew is generated by adding the third and fourth mother. The third nephew is generated by adding the first and second daughter. The fourth nephew is generated by adding the third and fourth daughter.\n    </p>\n    <h4>The Witnesses</h4>\n    <p>\n      <em>The right witness represents a summary of how the answer will begin.</em>\n    </p>\n    <p>\n      <em>The left witness represents a summary of how the answer will end.</em>\n    </p>\n    <p>\n      The two witnesses are generated by adding the nephews together in the same way the nephews were generated.\n      That is, the right witness is generated by adding the first and second nephew, and the left witness is generated by adding the third and fourth nephew. \n    </p>\n    <h4>The Judge</h4>\n    <p>\n      <em>The judge represents a summary of the entire reading.</em>\n    </p>\n    <p>\n      The judge is generated by adding the two witnesses together.\n    </p>\n    <h4>The Reconciler</h4>\n    <p>\n      <em>The reconciler represents a second opinion of the judgement.</em>\n    </p>\n    <p>\n      The reconciler is generated by adding the judge with the first mother. It should only be considered when the judgement is unclear.\n    </p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/pages/reading-figures/reading-figures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ReadingFiguresPage);
    return ReadingFiguresPage;
}());

//# sourceMappingURL=reading-figures.js.map

/***/ })

});
//# sourceMappingURL=5.js.map