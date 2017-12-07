webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingOverviewPageModule", function() { return ReadingOverviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tetragram_item_tetragram_item_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reading_overview__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_placement_item_placement_item_module__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReadingOverviewPageModule = /** @class */ (function () {
    function ReadingOverviewPageModule() {
    }
    ReadingOverviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reading_overview__["a" /* ReadingOverviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reading_overview__["a" /* ReadingOverviewPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_placement_item_placement_item_module__["a" /* PlacementItemComponentModule */],
                __WEBPACK_IMPORTED_MODULE_0__components_tetragram_item_tetragram_item_module__["a" /* TetragramItemComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__reading_overview__["a" /* ReadingOverviewPage */]
            ]
        })
    ], ReadingOverviewPageModule);
    return ReadingOverviewPageModule;
}());

//# sourceMappingURL=reading-overview.module.js.map

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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tetragram__ = __webpack_require__(291);
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(196);
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementItemComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placement_item__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tetragram_tetragram_module__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlacementItemComponentModule = /** @class */ (function () {
    function PlacementItemComponentModule() {
    }
    PlacementItemComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__tetragram_tetragram_module__["a" /* TetragramComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */]
            ]
        })
    ], PlacementItemComponentModule);
    return PlacementItemComponentModule;
}());

//# sourceMappingURL=placement-item.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_placement__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacementItemComponent = /** @class */ (function () {
    function PlacementItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_placement__["a" /* Placement */])
    ], PlacementItemComponent.prototype, "placement", void 0);
    PlacementItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'placement-item',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/components/placement-item/placement-item.html"*/'<button ion-item text-wrap detail-push>\n\n  <tetragram item-left\n    [tetragram]="placement.tetragram"\n    [color]="placement.getTypeColor()">\n  </tetragram>\n\n  {{placement.getMeaning()}}\n\n</button>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/components/placement-item/placement-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PlacementItemComponent);
    return PlacementItemComponent;
}());

//# sourceMappingURL=placement-item.js.map

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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramItemComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram_tetragram_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tetragram_item__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TetragramItemComponentModule = /** @class */ (function () {
    function TetragramItemComponentModule() {
    }
    TetragramItemComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */]),
                __WEBPACK_IMPORTED_MODULE_0__tetragram_tetragram_module__["a" /* TetragramComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */]
            ]
        })
    ], TetragramItemComponentModule);
    return TetragramItemComponentModule;
}());

//# sourceMappingURL=tetragram-item.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TetragramItemComponent = /** @class */ (function () {
    function TetragramItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tetragram__["a" /* Tetragram */])
    ], TetragramItemComponent.prototype, "tetragram", void 0);
    TetragramItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tetragram-item',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/components/tetragram-item/tetragram-item.html"*/'<button ion-item text-wrap detail-push>\n\n  <tetragram [tetragram]="tetragram" item-left color="planet"></tetragram>\n\n  {{tetragram.desc}}\n\n</button>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/components/tetragram-item/tetragram-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TetragramItemComponent);
    return TetragramItemComponent;
}());

//# sourceMappingURL=tetragram-item.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_reading__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_placement_type__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadingOverviewPage = /** @class */ (function () {
    function ReadingOverviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getTypeAsStringFromKey = __WEBPACK_IMPORTED_MODULE_3__models_placement_type__["c" /* getTypeAsStringFromKey */];
        var data = navCtrl.rootParams;
        var parent = data.parent;
        if (parent) {
            this.parent = parent;
            this.reading = parent.reading;
        }
        else {
            this.parent = this;
            this.reading = new __WEBPACK_IMPORTED_MODULE_2__models_reading__["a" /* Reading */](navParams.data);
        }
        var placements = this.reading.placements;
        this.warning = placements.find(function (placement) { return placement.type === __WEBPACK_IMPORTED_MODULE_3__models_placement_type__["a" /* PlacementType */].Warning; }),
            this.placements = {
                rules: placements.filter(function (placement) { return placement.type === __WEBPACK_IMPORTED_MODULE_3__models_placement_type__["a" /* PlacementType */].Strongest; }),
                exalted: placements.filter(function (placement) { return placement.type === __WEBPACK_IMPORTED_MODULE_3__models_placement_type__["a" /* PlacementType */].VeryStrong; }),
                triplicity: placements.filter(function (placement) { return placement.type === __WEBPACK_IMPORTED_MODULE_3__models_placement_type__["a" /* PlacementType */].Strong; })
            };
        this.keys = Object.keys(this.placements);
        this.topicPlacement = this.reading.getTopicPlacement();
        var partOfFortuneNumber = this.reading.getPartOfFortune();
        this.partOfFortune = this.reading.getPlacementForHouseNumber(partOfFortuneNumber);
    }
    ReadingOverviewPage.prototype.ionViewWillEnter = function () {
        if (this.parent)
            this.parent.title = 'Overview';
    };
    ReadingOverviewPage.prototype.showTetragram = function (tetragram) {
        this.parent.navCtrl.push('TetragramPage', { tetragram: tetragram });
    };
    ReadingOverviewPage.prototype.showPlacement = function (placement) {
        this.parent.navCtrl.push('PlacementPage', { placement: placement });
    };
    ReadingOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reading-overview',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/pages/reading-overview/reading-overview.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content padding>\n\n  <div class="question" *ngIf="reading.question">\n    {{reading.getQuestion()}}\n  </div>\n\n  <div class="instructions">\n    Click the buttons below for more information.\n  </div>\n\n  <ion-list *ngIf="warning">\n    <ion-list-header class="warning">Warning</ion-list-header>\n    <ion-item-group>\n      <placement-item [placement]="warning" (tap)="showPlacement(warning)"></placement-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Judge</ion-list-header>\n    <ion-item-group>\n      <tetragram-item [tetragram]="reading.judge" (tap)="showTetragram(reading.judge)">\n      </tetragram-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list *ngIf="topicPlacement">\n    <ion-list-header>Topic</ion-list-header>\n    <ion-item-divider>{{reading.topic}}</ion-item-divider>\n\n    <placement-item [placement]="topicPlacement" (tap)="showPlacement(topicPlacement)">\n    </placement-item>\n  </ion-list>\n\n  <ion-list *ngIf="keys.length > 0">\n\n    <ion-list-header>Strong Placements</ion-list-header>\n\n    <ion-item-group *ngFor="let key of keys">\n\n      <div *ngIf="placements[key].length > 0">\n\n        <ion-item-divider>{{getTypeAsStringFromKey(key)}}</ion-item-divider>\n\n        <div *ngFor="let placement of placements[key]">\n\n          <placement-item\n            [placement]="placement"\n            (tap)="showPlacement(placement)">\n          </placement-item>\n\n        </div>\n\n      </div>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Part of Fortune</ion-list-header>\n\n    <ion-item-group>\n\n      <placement-item\n        [placement]="partOfFortune"\n        (tap)="showPlacement(partOfFortune)">\n      </placement-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/pages/reading-overview/reading-overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ReadingOverviewPage);
    return ReadingOverviewPage;
}());

//# sourceMappingURL=reading-overview.js.map

/***/ })

});
//# sourceMappingURL=0.js.map