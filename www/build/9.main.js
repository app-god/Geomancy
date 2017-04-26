webpackJsonp([9],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPageModule = (function () {
    function NewPageModule() {
    }
    return NewPageModule;
}());
NewPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]
        ]
    })
], NewPageModule);

//# sourceMappingURL=new.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });
var House = (function () {
    function House(number) {
        this.number = number;
        this.page = 'HousePage';
        var info = houseInfo[number - 1];
        this.topics = info.topics;
        this.ruler = info.ruler;
        this.exaltation = info.exaltation;
        this.name = 'House ' + number;
    }
    return House;
}());

var houseInfo = [
    {
        number: 1,
        ruler: 'Mars',
        exaltation: '',
        topics: ['Self', 'Beginnings']
    },
    {
        number: 2,
        ruler: 'Venus',
        exaltation: 'Moon',
        topics: ['Wealth']
    },
    {
        number: 3,
        ruler: 'Mercury',
        topics: ['Communication']
    },
    {
        number: 4,
        ruler: 'Moon',
        exaltation: 'Jupiter',
        topics: ['Home', 'Mother']
    },
    {
        number: 5,
        ruler: 'Sun',
        topics: ['Creativity']
    },
    {
        number: 6,
        ruler: 'Mercury',
        exaltation: 'Mercury',
        topics: ['Health', 'Service']
    },
    {
        number: 7,
        ruler: 'Venus',
        exaltation: 'Saturn',
        topics: ['Partners']
    },
    {
        number: 8,
        ruler: 'Mars',
        topics: ['Transformation', 'Birth', 'Death', 'Mysteries']
    },
    {
        number: 9,
        ruler: 'Jupiter',
        topics: ['Meaning', 'University', 'Luck', 'Travel', 'Gambling']
    },
    {
        number: 10,
        ruler: 'Saturn',
        exaltation: 'Mars',
        topics: ['Career', 'Reputation', 'Honor', 'Discipline', 'Father']
    },
    {
        number: 11,
        ruler: 'Saturn',
        topics: ['Community', 'Friendships', 'Humanity']
    },
    {
        number: 12,
        ruler: 'Jupiter',
        exaltation: 'Venus',
        topics: ['Sacrifice', 'Ending', 'Imagination']
    }
];
//# sourceMappingURL=house.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_house__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPage = (function () {
    function NewPage(navCtrl, modCtrl, loadingCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.startDisabled = false;
        this.question = '';
        this.topic = '';
        var houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map(function (number) { return new __WEBPACK_IMPORTED_MODULE_3__models_house__["a" /* House */](number); });
        var nestedTopics = houses.map(function (house) { return house.topics; });
        this.topics = [].concat.apply([], nestedTopics);
        this.topics.sort();
        this.topics.unshift('None');
        this.topic = this.topics[0];
    }
    NewPage.prototype.clickStart = function () {
        var _this = this;
        this.startDisabled = true;
        if (this.question == '') {
            this.question = 'None';
        }
        var loading = this.loadingCtrl.create({
            content: 'Generating reading'
        });
        loading.present();
        var readingData = {
            question: this.question,
            topic: this.topic,
            date: Date.now(),
            key0: Math.floor(Math.random() * 15),
            key1: Math.floor(Math.random() * 15),
            key2: Math.floor(Math.random() * 15),
            key3: Math.floor(Math.random() * 15)
        };
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                history = history || [];
                history.push(readingData);
                _this.storage.set('history', history);
                loading.dismiss();
                var readingModal = _this.modCtrl.create('ReadingPage', {
                    readingData: readingData
                });
                readingModal.present();
                _this.question = '';
                _this.topic = 'None';
                _this.startDisabled = false;
            });
        });
    };
    NewPage.prototype.showHelp = function () {
        this.navCtrl.push('HelpPage', { topic: 'new reading' });
    };
    return NewPage;
}());
NewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-new',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Reading</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showHelp()">\n        <ion-icon name="help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item padding>\n      <ion-label stacked>Question</ion-label>\n      <ion-textarea [(ngModel)]="question" rows="3"></ion-textarea>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label stacked>Topic</ion-label>\n      <ion-select [(ngModel)]="topic">\n        <ion-option\n          [selected]="t == topic"\n          [value]="t"\n          *ngFor="let t of topics">\n          {{t}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<button ion-button block large\n  class="create"\n  (tap)="clickStart()"\n  [disabled]="startDisabled">\n  Create\n</button>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* AlertController */]])
], NewPage);

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map