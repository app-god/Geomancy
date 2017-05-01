webpackJsonp([8],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new__ = __webpack_require__(335);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });
var House = (function () {
    function House(number) {
        this.number = number;
        this.page = 'HousePage';
        var info = houseInfo[number - 1];
        this.topics = info.topics;
        this.phrase = info.phrase;
        this.name = 'House ' + number;
    }
    return House;
}());

var houseInfo = [
    {
        number: 1,
        phrase: 'yourself',
        topics: ['Self', 'Life', 'Health']
    },
    {
        number: 2,
        phrase: 'concrete worth',
        topics: ['Money', 'Property', 'Personal Worth']
    },
    {
        number: 3,
        phrase: 'friendships',
        topics: ['Brother', 'Sister', 'News', 'Short Journeys']
    },
    {
        number: 4,
        phrase: 'family',
        topics: ['Father', 'Inheritence', 'Conclusion']
    },
    {
        number: 5,
        phrase: 'creativity',
        topics: ['Children', 'Pleasure', 'Feasts', 'Speculation']
    },
    {
        number: 6,
        phrase: 'cleverness',
        topics: ['Servants', 'Sickness', 'Uncles', 'Aunts', 'Animals']
    },
    {
        number: 7,
        phrase: 'love',
        topics: ['Love', 'Marriage', 'Husband', 'Wife', 'Partnerships', 'Public Enemies', 'Lawsuits']
    },
    {
        number: 8,
        phrase: 'suffering',
        topics: ['Deaths', 'Wills', 'Legacies', 'Pain', 'Anxiety']
    },
    {
        number: 9,
        phrase: 'philosophy',
        topics: ['Long journeys', 'Voyages', 'Science', 'Religion', 'Art', 'Visions', 'Divinations']
    },
    {
        number: 10,
        phrase: 'reputation',
        topics: ['Mother', 'Rank', 'Honor', 'Profession', 'Authority', 'Employment']
    },
    {
        number: 11,
        phrase: 'understanding',
        topics: ['Friends', 'Hopes', 'Wishes']
    },
    {
        number: 12,
        phrase: 'the subconscious',
        topics: ['Sorrows', 'Fears', 'Punishments', 'Secret Enemies', 'Institutions', 'Unseen Dangers', 'Restriction']
    }
];
//# sourceMappingURL=house.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_house__ = __webpack_require__(327);
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
    function NewPage(navCtrl, modCtrl, loadingCtrl, storage, alertCtrl, actionCtrl) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
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
    NewPage.prototype.clickManual = function () {
        this.navCtrl.push('NewManualPage', {
            question: this.question,
            topic: this.topic
        });
    };
    NewPage.prototype.clickStart = function () {
        this.startDisabled = true;
        if (this.question == '') {
            this.question = 'None';
        }
        var readingData = {
            question: this.question,
            topic: this.topic,
            date: Date.now(),
            key0: Math.floor(Math.random() * 15),
            key1: Math.floor(Math.random() * 15),
            key2: Math.floor(Math.random() * 15),
            key3: Math.floor(Math.random() * 15)
        };
        this.question = '';
        this.topic = 'None';
        this.startDisabled = false;
        var readingModal = this.modCtrl.create('ReadingPage', {
            readingData: readingData
        });
        readingModal.present();
    };
    NewPage.prototype.showMore = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Show Introduction',
                    handler: function () {
                        var introMod = _this.modCtrl.create('TutorialPage');
                        introMod.present();
                    }
                },
                {
                    text: 'Show Help',
                    handler: function () {
                        _this.navCtrl.push('HelpPage', { topic: 'new reading' });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    return NewPage;
}());
NewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-new',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Reading</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showMore()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item padding>\n      <div>test</div>\n      <ion-label stacked>Question</ion-label>\n      <ion-textarea [(ngModel)]="question" rows="3"\n        placeholder="Enter question here"></ion-textarea>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label stacked>Topic</ion-label>\n      <ion-select [(ngModel)]="topic">\n        <ion-option\n          [selected]="t == topic"\n          [value]="t"\n          *ngFor="let t of topics">\n          {{t}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block large\n    color="primary"\n    (tap)="clickStart()"\n    [disabled]="startDisabled">\n    Create Automatically\n  </button>\n\n  <br>\n\n  <button ion-button block large\n    color="secondary"\n    (tap)="clickManual()"\n    [disabled]="startDisabled">\n    Create Manually\n  </button>\n\n  <p class="instructions">\n    Although this procedure can be done automatically, manually generating the numbers by etching dots in the earth is a more powerful way of forming the divination.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ActionSheetController */]])
], NewPage);

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map