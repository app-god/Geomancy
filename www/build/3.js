webpackJsonp([3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousePageModule", function() { return HousePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_placement_item_placement_item_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__house__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HousePageModule = /** @class */ (function () {
    function HousePageModule() {
    }
    HousePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__house__["a" /* HousePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__house__["a" /* HousePage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_placement_item_placement_item_module__["a" /* PlacementItemComponentModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__house__["a" /* HousePage */]
            ]
        })
    ], HousePageModule);
    return HousePageModule;
}());

//# sourceMappingURL=house.module.js.map

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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tetragram__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_placement__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HousePage = /** @class */ (function () {
    function HousePage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placements = [];
        this.house = this.navParams.get('house');
        var tetragrams = __WEBPACK_IMPORTED_MODULE_2__models_tetragram__["a" /* Tetragram */].getAll();
        tetragrams.forEach(function (tetragram) {
            _this.placements.push(new __WEBPACK_IMPORTED_MODULE_3__models_placement__["a" /* Placement */](_this.house, tetragram));
        });
        this.details = [
            {
                name: 'Title',
                value: 'House of ' + this.house.title
            },
            {
                name: 'Topics',
                value: this.house.topics.join(', ')
            },
            {
                name: 'Sign',
                value: this.house.sign,
                class: this.house.sign.toLowerCase()
            }
        ];
    }
    HousePage.prototype.showPlacement = function (placement) {
        this.navCtrl.push('PlacementPage', { placement: placement });
    };
    HousePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-house',template:/*ion-inline-start:"/Users/aneeley/Code/geomancy/src/pages/house/house.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>House {{house.number}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row *ngFor="let detail of details">\n\n      <ion-col col-4>\n        {{detail.name}}\n      </ion-col>\n\n      <ion-col col-8 [ngClass]="detail.class">\n        {{detail.value}}\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-list no-lines>\n\n    <ion-list-header>Placements</ion-list-header>\n\n    <ion-item-group *ngFor="let placement of placements">\n      <ion-item-divider>{{placement.tetragram.name}}</ion-item-divider>\n      <placement-item [placement]="placement" (tap)="showPlacement(placement)"></placement-item>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aneeley/Code/geomancy/src/pages/house/house.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HousePage);
    return HousePage;
}());

//# sourceMappingURL=house.js.map

/***/ })

});
//# sourceMappingURL=3.js.map