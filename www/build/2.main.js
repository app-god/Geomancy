webpackJsonp([2],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading__ = __webpack_require__(338);
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tetragram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tetragramInfo; });
var Tetragram = (function () {
    function Tetragram(key) {
        if (key === void 0) { key = Math.floor(Math.random() * 15); }
        this.key = key;
        this.page = 'TetragramPage';
        var info = tetragramInfo[key];
        this.name = info.name;
        this.desc = info.desc;
        this.good = info.good;
        this.rules = info.rules;
        this.exalted = info.exalted;
        this.phrase = info.phrase;
        this.houseMeanings = info.houseMeanings;
        this.planet = info.planet;
        this.dots = info.dots;
        this.sign = info.sign;
        this.row0 = (key >> 0) % 2;
        this.row1 = (key >> 1) % 2;
        this.row2 = (key >> 2) % 2;
        this.row3 = (key >> 3) % 2;
    }
    Tetragram.prototype.add = function (tetragram) {
        var row0 = (this.row0 + tetragram.row0 + 1) % 2;
        var row1 = (this.row1 + tetragram.row1 + 1) % 2;
        var row2 = (this.row2 + tetragram.row2 + 1) % 2;
        var row3 = (this.row3 + tetragram.row3 + 1) % 2;
        var key = (row3 << 3) + (row2 << 2) + (row1 << 1) + (row0 << 0);
        return new Tetragram(key);
    };
    Tetragram.prototype.getHouseMeaning = function (houseNumber) {
        return this.houseMeanings[houseNumber - 1];
    };
    Tetragram.generateKey = function (num1, num2, num3, num4) {
        var row1 = num1 ? (num1 % 2) * 1 : 0;
        var row2 = num2 ? (num2 % 2) * 2 : 0;
        var row3 = num3 ? (num3 % 2) * 4 : 0;
        var row4 = num4 ? (num4 % 2) * 8 : 0;
        var key = row1 + row2 + row3 + row4;
        return key;
    };
    return Tetragram;
}());

var tetragramInfo = [
    {
        key: 0,
        name: 'Via',
        desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.',
        planet: 'Moon',
        rules: [1, 8],
        exalted: [2],
        dots: 4,
        sign: 'Cancer',
        good: false,
        phrase: 'clear a path for',
        houseMeanings: [
            'Evil except for prison.',
            'Indifferent.',
            'Very good in all.',
            'Good in all save love.',
            'Voyages good.',
            'Evil.',
            'Rather good, especially for voyages.',
            'Evil.',
            'Indifferent. Good for journeys.',
            'Good.',
            'Very good.',
            'Excellent'
        ]
    },
    {
        key: 1,
        name: 'Caput Draconis',
        desc: 'Good with good, evil with evil. Gives good issue for gain.',
        planet: 'Venus',
        rules: [2, 7, 9, 12],
        exalted: [12, 4],
        dots: 5,
        sign: 'Sagittarius',
        good: true,
        phrase: 'begin',
        houseMeanings: [
            'Good in all things',
            'Good.',
            'Very good.',
            'Good save in war.',
            'Very good.',
            'Good for immorality only.',
            'Good especially for peace.',
            'Good.',
            'Very good.',
            'Good in all.',
            'Good for the church and ecclesiastical gain.',
            'Not very good.'
        ]
    },
    {
        key: 2,
        name: 'Puella',
        desc: 'Good in all demands, especially in those things relating to women.',
        planet: 'Venus',
        rules: [2, 7],
        exalted: [12],
        dots: 5,
        sign: 'Libra',
        good: true,
        phrase: 'beautify',
        houseMeanings: [
            'Good except in war.',
            'Very good.',
            'Good.',
            'Indifferent.',
            'Very good, but notice the aspects.',
            'Good, but especially for debauchery.',
            'Good except for war.',
            'Good.',
            'Good for music. Otherwise only medium.',
            'Good for peace.',
            'Good, and love of ladies.',
            'Good in all.'
        ]
    },
    {
        key: 3,
        name: 'Fortuna Major',
        desc: 'Good for gain in all things where a person has hopes to win.',
        planet: 'Sun',
        rules: [5],
        exalted: [1],
        dots: 6,
        sign: 'Leo',
        good: true,
        phrase: 'succeed in',
        houseMeanings: [
            'Good save in secrecy.',
            'Good except in sad things.',
            'Good in all.',
            'Good in all, but melancholy.',
            'Very good in all things.',
            'Very good except for debauchery.',
            'Good in all.',
            'Moderately good.',
            'Very good.',
            'Exceedingly good. Go to superiors.',
            'Very good.',
            'Good in all.'
        ]
    },
    {
        key: 4,
        name: 'Puer',
        desc: 'Evil in most demands, except in those things relating to war or love.',
        planet: 'Mars',
        rules: [1, 8],
        exalted: [10],
        dots: 5,
        sign: 'Aries',
        good: false,
        phrase: 'command',
        houseMeanings: [
            'Indifferent. Best in war.',
            'Good, but with trouble.',
            'Good fortune.',
            'Evil, except in war and love.',
            'Medium good.',
            'Medium.',
            'Evil, save in war.',
            'Evil, save for love.',
            'Evil except for war.',
            'Rather evil. But good for love and war. Most other things medium.',
            'Medium; good favor.',
            'Very good in all.'
        ]
    },
    {
        key: 5,
        name: 'Acquisitio',
        desc: 'Generally good for profit and gain.',
        planet: 'Jupiter',
        rules: [9, 12],
        exalted: [4],
        dots: 6,
        sign: 'Sagittarius',
        good: true,
        phrase: 'acquire',
        houseMeanings: [
            'Happy, success in all things.',
            'Very prosperous.',
            'Favor and riches.',
            'Good fortune and success.',
            'Good success.',
            'Good–especially if it agrees with the fifth.',
            'Reasonably good.',
            'Rather good, but not very. The sick shall die.',
            'Good in all demands.',
            'Good in suits.',
            'Good in all.',
            'Evil, pain and loss.'
        ]
    },
    {
        key: 6,
        name: 'Carcer',
        desc: 'Generally evil. Delay, binding, bar, restriction.',
        planet: 'Saturn',
        rules: [10, 11],
        exalted: [7],
        dots: 6,
        sign: "Capricorn",
        good: false,
        phrase: 'restrict',
        houseMeanings: [
            'Evil except to fortify a place.',
            'Good in Saturnine questions; else evil.',
            'Evil.',
            'Good only for melancholy.',
            'Receive a letter within three days. Evil.',
            'Very evil.',
            'Evil.',
            'Very evil.',
            'Evil in all.',
            'Evil save in hidden treasure.',
            'Much anxiety.',
            'Rather good.'
        ]
    },
    {
        key: 7,
        name: 'Tristitia',
        desc: 'Evil in almost all things.',
        planet: 'Saturn',
        rules: [10, 11],
        exalted: [7],
        dots: 7,
        sign: 'Aquarius',
        good: false,
        phrase: 'find sadness in',
        houseMeanings: [
            'Medium, but good for treasure and fortifying.',
            'Medium, but good to fortify.',
            'Evil in all.',
            'Evil in all.',
            'Very evil.',
            'Evil, except for debauchery.',
            'Evil for inheritance and magic only.',
            'Evil, but in secrecy good.',
            'Evil except for magic.',
            'Evil except for fortifications.',
            'Evil in all.',
            'Evil, but good for magic and treasure.'
        ]
    },
    {
        key: 8,
        name: 'Cauda Draconis',
        desc: 'Good with evil, and evil with good. Good for loss, and for passing out of an affair.',
        planet: 'Mars',
        rules: [8, 10, 11],
        exalted: [10, 7],
        dots: 5,
        sign: 'Virgo',
        good: false,
        phrase: 'finish',
        houseMeanings: [
            'Destroy figure if it falls here! Makes judgment worthless.',
            'Very evil.',
            'Evil in all.',
            'Good especially for conclusion of the matter.',
            'Very evil.',
            'Rather good.',
            'Evil, war, and fire.',
            'No good, except for magic.',
            'Good for science only. Bad for journeys. Robbery.',
            'Evil save in works of fire.',
            'Evil save for favors.',
            'Rather good.',
        ]
    },
    {
        key: 9,
        name: 'Conjunctio',
        desc: 'Good with good, or evil with evil. Recovery from things lost.',
        planet: 'Mercury',
        rules: [3, 6],
        exalted: [11],
        dots: 6,
        sign: 'Virgo',
        good: true,
        phrase: 'reconcile',
        houseMeanings: [
            'Good with good, evil with evil.',
            'Commonly good.',
            'Good fortune.',
            'Good save for health; see the eighth.',
            'Medium',
            'Good for immorality only.',
            'Rather good.',
            'Evil, death.',
            'Medium good.',
            'For love, good. For sickness, evil.',
            'Good in all.',
            'Medium. Bad for prisoners.'
        ]
    },
    {
        key: 10,
        name: 'Amissio',
        desc: 'Good for loss of substance and sometimes for love, but very bad for gain.',
        planet: 'Venus',
        rules: [2, 7],
        exalted: [12],
        dots: 6,
        sign: 'Taurus',
        good: false,
        phrase: 'sacrifice',
        houseMeanings: [
            'Ill in all things but for prisoners.',
            'Very ill for money, but good for love.',
            'Ill end–except for quarrels.',
            'Ill in all.',
            'Evil except for agriculture.',
            'Rather evil for love.',
            'Very good for love, otherwise evil.',
            'Excellent in all questions.',
            'Evil in all things.',
            'Evil except for favor with women.',
            'Good for love, otherwise bad.',
            'Evil in all things.'
        ]
    },
    {
        key: 11,
        name: 'Albus',
        desc: 'Good for profit and for entering into a place or undertaking.',
        planet: 'Mercury',
        rules: [3, 6],
        exalted: [11],
        dots: 7,
        sign: 'Gemini',
        good: true,
        phrase: 'learn',
        houseMeanings: [
            'Good for marriage. Mercurial. Peace.',
            'Good in all.',
            'Very good.',
            'Very good except in war.',
            'Good.',
            'Good in all things.',
            'Good except in all things.',
            'Good.',
            'A messenger brings a letter.',
            'Excellent in all.',
            'Very good.',
            'Marvelously good.'
        ]
    },
    {
        key: 12,
        name: 'Fortuna Minor',
        desc: 'Good in any manner in which a person wishes to proceed quickly.',
        planet: 'Sun',
        rules: [5],
        exalted: [1],
        dots: 6,
        sign: 'Leo',
        good: true,
        phrase: 'improve in',
        houseMeanings: [
            'Speed in victory and in love, but choleric.',
            'Very good.',
            'Good–but wrathful.',
            'Haste; rather evil except for peace.',
            'Good in all things.',
            'Medium in all.',
            'Evil except for war or love.',
            'Evil generally.',
            'Good, but choleric.',
            'Good, except for peace.',
            'Good, especially for love.',
            'Good, except for alternation, or for serving another.'
        ]
    },
    {
        key: 13,
        name: 'Rubeus',
        desc: 'Evil in all that is good and good in all that is evil.',
        planet: 'Mars',
        rules: [1, 8],
        exalted: [10],
        dots: 7,
        sign: 'Scorpio',
        good: false,
        phrase: 'destroy',
        houseMeanings: [
            'Destroy the figure if it falls here! It makes the judgement worthless.',
            'Evil in all demands.',
            'Evil except to let blood.',
            'Evil except in war and Fire.',
            'Evil save for love, and sowing seed.',
            'Evil except for bloodletting.',
            'Evil except for war and fire.',
            'Evil.',
            'Very evil.',
            'Dissolute. Love, fire.',
            'Evil, except to let blood.',
            'Evil in all things.'
        ]
    },
    {
        key: 14,
        name: 'Laetitia',
        desc: 'Good for joy, present or to come.',
        planet: 'Jupiter',
        rules: [9, 12],
        exalted: [4],
        dots: 7,
        sign: 'Pisces',
        good: true,
        phrase: 'find joy in',
        houseMeanings: [
            'Good, except in war.',
            'Sickly.',
            'Ill.',
            'Mainly good.',
            'Excellently good.',
            'Evil generally.',
            'Indifferent.',
            'Evil generally.',
            'Very good.',
            'Good, rather in war than in peace.',
            'Good in all.',
            'Evil generally.'
        ]
    },
    {
        key: 15,
        name: 'Populus',
        desc: 'Sometimes good and sometimes bad; good with good, and evil with evil.',
        planet: 'Moon',
        rules: [4],
        exalted: [2],
        dots: 8,
        sign: 'Cancer',
        good: true,
        phrase: 'agree',
        houseMeanings: [
            'Good in marriages.',
            'Medium good.',
            'Rather good than bad.',
            'Good in all but love.',
            'Good in most things.',
            'Good.',
            'In war good; else medium.',
            'Evil.',
            'Look for letters.',
            'Good.',
            'Good in all.',
            'Very evil.'
        ]
    }
];
//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 326:
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__house__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementType; });


var Reading = (function () {
    function Reading(data, question, topic) {
        var _this = this;
        if (!data) {
            data = {
                question: question ? question : 'None',
                topic: topic ? topic : 'None',
                date: Date.now(),
                key0: Math.floor(Math.random() * 15),
                key1: Math.floor(Math.random() * 15),
                key2: Math.floor(Math.random() * 15),
                key3: Math.floor(Math.random() * 15)
            };
        }
        if (!data.question || data.question == '') {
            this.question = 'None';
        }
        else {
            this.question = data.question;
        }
        if (!data.topic || data.topic == '') {
            this.topic = 'None';
        }
        else {
            this.topic = data.topic;
        }
        this.readingData = data;
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
        this.partOfFortune = this.getPartOfFortune();
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
    Reading.prototype.getReadingData = function () {
        return this.readingData;
    };
    Reading.prototype.getPlacements = function () {
        var placements = [].concat(this.getWarnings(), this.getRulerships(), this.getExaltations());
        // remove duplicates
        var uniqePlacements = [];
        placements.forEach(function (placement) {
            if (uniqePlacements.indexOf(placement) == -1)
                uniqePlacements.push(placement);
        });
        return uniqePlacements;
    };
    Reading.prototype.getWarnings = function () {
        var warnings = [];
        var tetragram = this.getTetragramForHouse(1);
        if (tetragram.name == 'Rubeus'
            || tetragram.name == 'Cauda Draconis') {
            var message = tetragram.name + ' is in the first house.';
            if (['Rubeus', 'Cauda Draconis'].indexOf(tetragram.name) > -1) {
                warnings.push({
                    tetragram: tetragram,
                    house: new __WEBPACK_IMPORTED_MODULE_1__house__["a" /* House */](1),
                    type: PlacementType.Warning
                });
            }
        }
        return warnings;
    };
    Reading.prototype.getRulerships = function () {
        var _this = this;
        var rulerships = [];
        var houseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        houseNumbers.forEach(function (houseNumber) {
            var tetragram = _this.getTetragramForHouse(houseNumber);
            if (tetragram.rules.indexOf(houseNumber) >= 0) {
                var house = new __WEBPACK_IMPORTED_MODULE_1__house__["a" /* House */](houseNumber);
                rulerships.push({
                    tetragram: tetragram,
                    house: house,
                    type: PlacementType.ExtremelyStrong
                });
            }
        });
        return rulerships;
    };
    Reading.prototype.getExaltations = function () {
        var _this = this;
        var exaltations = [];
        var houseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        houseNumbers.forEach(function (houseNumber) {
            var tetragram = _this.getTetragramForHouse(houseNumber);
            if (tetragram.exalted.indexOf(houseNumber) >= 0) {
                var house = new __WEBPACK_IMPORTED_MODULE_1__house__["a" /* House */](houseNumber);
                exaltations.push({
                    tetragram: tetragram,
                    house: house,
                    type: PlacementType.VeryStrong
                });
            }
        });
        return exaltations;
    };
    return Reading;
}());

var PlacementType;
(function (PlacementType) {
    PlacementType[PlacementType["Warning"] = 0] = "Warning";
    PlacementType[PlacementType["ExtremelyStrong"] = 1] = "ExtremelyStrong";
    PlacementType[PlacementType["VeryStrong"] = 2] = "VeryStrong";
    PlacementType[PlacementType["Strong"] = 3] = "Strong";
})(PlacementType || (PlacementType = {}));
//# sourceMappingURL=reading.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reading__ = __webpack_require__(327);
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
    function ReadingPage(navCtrl, navParams, storage, actionCtrl, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.actionCtrl = actionCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.title = 'Reading';
        this.reading = new __WEBPACK_IMPORTED_MODULE_3__models_reading__["b" /* Reading */](navParams.get('readingData'));
        this.rootParams = {
            parent: this
        };
    }
    ReadingPage.prototype.showMore = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Save Reading',
                    handler: function () {
                        _this.saveReading();
                    }
                },
                {
                    text: 'Show Info',
                    handler: function () {
                        _this.navCtrl.push('ReadingInfoPage', { reading: _this.reading });
                    }
                },
                {
                    text: 'Show Help',
                    handler: function () {
                        _this.navCtrl.push('HelpPage', { topic: 'reading' });
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
    ReadingPage.prototype.saveReading = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('history').then(function (history) {
                history = history || [];
                history.push(_this.reading.readingData);
                _this.storage.set('history', history).then(function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Reading was saved successfully',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                });
            });
        });
    };
    return ReadingPage;
}());
ReadingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-reading',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/reading/reading.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="showMore()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs>\n  <ion-tab [root]="\'ReadingOverviewPage\'" [rootParams]="rootParams" tabTitle="Overview" tabIcon="eye"></ion-tab>\n  <ion-tab [root]="\'ReadingHousesPage\'"   [rootParams]="rootParams" tabTitle="Houses" tabIcon="home"></ion-tab>\n  <ion-tab [root]="\'ReadingFiguresPage\'"  [rootParams]="rootParams" tabTitle="Figures" tabIcon="grid"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/reading/reading.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _f || Object])
], ReadingPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=reading.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map