webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tetragram_item_tetragram_item_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tetragram__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tetragram_tetragram_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_placement_item_placement_item_module__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetragramPageModule", function() { return TetragramPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TetragramPageModule = (function () {
    function TetragramPageModule() {
    }
    return TetragramPageModule;
}());
TetragramPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__tetragram__["a" /* TetragramPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tetragram__["a" /* TetragramPage */]),
            __WEBPACK_IMPORTED_MODULE_4__components_tetragram_tetragram_module__["a" /* TetragramComponentModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_placement_item_placement_item_module__["a" /* PlacementItemComponentModule */],
            __WEBPACK_IMPORTED_MODULE_0__components_tetragram_item_tetragram_item_module__["a" /* TetragramItemComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__tetragram__["a" /* TetragramPage */]
        ]
    })
], TetragramPageModule);

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram_info__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tetragram; });

var Tetragram = (function () {
    function Tetragram(key) {
        if (key === void 0) { key = Math.floor(Math.random() * 15); }
        this.key = key;
        var info = __WEBPACK_IMPORTED_MODULE_0__tetragram_info__["a" /* tetragramInfo */][key];
        this.name = info.name;
        this.translation = info.translation;
        this.desc = info.desc;
        this.element = info.element;
        this.rules = info.rules;
        this.exalted = info.exalted;
        this.fall = info.fall;
        this.detriment = info.detriment;
        this.triplicity = info.triplicity;
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
    Tetragram.prototype.reversed = function () {
        // flip entire tetragram
        var row0 = this.row3;
        var row1 = this.row2;
        var row2 = this.row1;
        var row3 = this.row0;
        var key = Tetragram.generateKey(row0, row1, row2, row3);
        return new Tetragram(key);
    };
    Tetragram.prototype.inversed = function () {
        // flip each row
        var row0 = (this.row0 + 1) % 2;
        var row1 = (this.row1 + 1) % 2;
        var row2 = (this.row2 + 1) % 2;
        var row3 = (this.row3 + 1) % 2;
        var key = Tetragram.generateKey(row0, row1, row2, row3);
        return new Tetragram(key);
    };
    Tetragram.prototype.conversed = function () {
        return this.reversed().inversed();
    };
    Tetragram.generateKey = function (num1, num2, num3, num4) {
        var row1 = num1 ? (num1 % 2) * 1 : 0;
        var row2 = num2 ? (num2 % 2) * 2 : 0;
        var row3 = num3 ? (num3 % 2) * 4 : 0;
        var row4 = num4 ? (num4 % 2) * 8 : 0;
        var key = row1 + row2 + row3 + row4;
        return key;
    };
    Tetragram.getAll = function () {
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var tetragrams = numbers.map(function (number) {
            return new Tetragram(number);
        });
        return tetragrams;
    };
    return Tetragram;
}());

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tetragram__ = __webpack_require__(279);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tetragram__["a" /* TetragramComponent */]
        ]
    })
], TetragramComponentModule);

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tetragramInfo; });
var tetragramInfo = [
    {
        key: 0,
        name: 'Via',
        translation: 'Way',
        desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.',
        planet: 'Moon',
        element: 'Water',
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 4,
        sign: 'Cancer',
        phrase: 'Activity',
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
            'Excellent.'
        ]
    },
    {
        key: 1,
        name: 'Caput Draconis',
        translation: "Dragon's Head",
        desc: 'Good with good, evil with evil. Gives good issue for gain.',
        planet: 'Venus',
        element: 'Earth',
        rules: [2, 7, 9, 12],
        exalted: [12, 4],
        fall: [6, 10],
        detriment: [1, 8, 3, 6],
        triplicity: [],
        dots: 5,
        sign: 'Sagittarius',
        phrase: 'Preparation',
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
        translation: 'Maid',
        desc: 'Good in all demands, especially in those things relating to women.',
        planet: 'Venus',
        element: 'Air',
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [3, 11],
        dots: 5,
        sign: 'Libra',
        phrase: 'Harmony',
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
        translation: 'Greater Fortune',
        desc: 'Good for gain in all things where a person has hopes to win.',
        planet: 'Sun',
        element: 'Fire',
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        phrase: 'Lasting success',
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
        translation: 'Child',
        desc: 'Evil in most demands, except in those things relating to war or love.',
        planet: 'Mars',
        element: 'Fire',
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [5, 9],
        dots: 5,
        sign: 'Aries',
        phrase: 'Enthusiasm',
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
        translation: 'Gain',
        desc: 'Generally good for profit and gain.',
        planet: 'Jupiter',
        element: 'Fire',
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [1, 5],
        dots: 6,
        sign: 'Sagittarius',
        phrase: 'Acquisition',
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
        translation: 'Prison',
        desc: 'Generally evil. Delay, binding, bar, restriction.',
        planet: 'Saturn',
        element: 'Earth',
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [2, 6],
        dots: 6,
        sign: "Capricorn",
        phrase: 'Limitation',
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
        translation: 'Sorrow',
        desc: 'Evil in almost all things.',
        planet: 'Saturn',
        element: 'Air',
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [3, 7],
        dots: 7,
        sign: 'Aquarius',
        phrase: 'Melancholy',
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
        translation: "Dragon's Tail",
        desc: 'Good with evil, and evil with good. Good for loss, and for passing out of an affair.',
        planet: 'Mars',
        element: 'Fire',
        rules: [8, 10, 11],
        exalted: [10, 7],
        fall: [4, 1],
        detriment: [2, 7, 4, 5],
        triplicity: [],
        dots: 5,
        sign: 'Virgo',
        phrase: 'An ending',
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
        translation: 'Connection',
        desc: 'Good with good, or evil with evil. Recovery from things lost.',
        planet: 'Mercury',
        element: 'Earth',
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [2, 10],
        dots: 6,
        sign: 'Virgo',
        phrase: 'Combination',
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
        translation: 'Loss',
        desc: 'Good for loss of substance and sometimes for love, but very bad for gain.',
        planet: 'Venus',
        element: 'Earth',
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [10],
        dots: 6,
        sign: 'Taurus',
        phrase: 'Sacrifice',
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
        translation: 'White',
        desc: 'Good for profit and for entering into a place or undertaking.',
        planet: 'Mercury',
        element: 'Air',
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [7, 11],
        dots: 7,
        sign: 'Gemini',
        phrase: 'Wisdom',
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
        translation: 'Lesser Fortune',
        desc: 'Good in any manner in which a person wishes to proceed quickly.',
        planet: 'Sun',
        element: 'Fire',
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        phrase: 'Temporary success',
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
        translation: 'Red',
        desc: 'Evil in all that is good and good in all that is evil.',
        planet: 'Mars',
        element: 'Water',
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [12],
        dots: 7,
        sign: 'Scorpio',
        phrase: 'Toxicity',
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
        translation: 'Joy',
        desc: 'Good for joy, present or to come.',
        planet: 'Jupiter',
        element: 'Water',
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [4, 8],
        dots: 7,
        sign: 'Pisces',
        phrase: 'Happiness',
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
        translation: 'People',
        desc: 'Sometimes good and sometimes bad; good with good, and evil with evil.',
        planet: 'Moon',
        element: 'Water',
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 8,
        sign: 'Cancer',
        phrase: 'Passivity',
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
//# sourceMappingURL=tetragram.info.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return houseInfo; });
var houseInfo = [
    {
        number: 1,
        title: 'Self',
        description: '',
        phrase: 'yourself',
        sign: 'Aries',
        topics: ['Self', 'Life', 'Health', 'First impression']
    },
    {
        number: 2,
        title: 'Resources',
        description: '',
        phrase: 'wealth',
        sign: 'Taurus',
        topics: ['Wealth', 'Resources', 'Self-esteem', 'Survival']
    },
    {
        number: 3,
        title: 'Communication',
        description: '',
        phrase: 'perception',
        sign: 'Gemini',
        topics: ['Siblings', 'Friends', 'Short Journeys', 'Traffic']
    },
    {
        number: 4,
        title: 'Home and Family',
        description: '',
        phrase: 'your home',
        sign: 'Cancer',
        topics: ['Family', 'Inheritence', 'Home', 'Mother']
    },
    {
        number: 5,
        title: 'Pleasure and Creativity',
        description: '',
        phrase: 'creativity',
        sign: 'Leo',
        topics: ['Children', 'Romance', 'Gambling', 'Love']
    },
    {
        number: 6,
        title: 'Work and Service',
        description: '',
        phrase: 'daily work',
        sign: 'Virgo',
        topics: ['Work', 'Habits', 'Service', 'Illness']
    },
    {
        number: 7,
        title: 'Partnership',
        description: '',
        phrase: 'partnerships',
        sign: 'Libra',
        topics: ['Marriage', 'Partnerships', 'Enemies (Public)', 'Negotiation']
    },
    {
        number: 8,
        title: 'Power and the Psyche',
        description: '',
        phrase: 'power',
        sign: 'Scorpio',
        topics: ['Deaths', 'Occult Abilities', 'Sex', 'Inheritance']
    },
    {
        number: 9,
        title: 'Philosophy and Education',
        description: '',
        phrase: 'education',
        sign: 'Sagittarius',
        topics: ['Long Journeys', 'Religion', 'Education', 'Philosophy']
    },
    {
        number: 10,
        title: 'Career and Public Life',
        description: '',
        phrase: 'career',
        sign: 'Capricorn',
        topics: ['Honor', 'Career', 'Reputation', 'Father']
    },
    {
        number: 11,
        title: 'the World',
        description: '',
        phrase: 'the world',
        sign: 'Aquarius',
        topics: ['Society', 'Hopes', 'Humanity', 'Social Media']
    },
    {
        number: 12,
        title: 'Spirituality',
        description: '',
        phrase: 'spirituality',
        sign: 'Pisces',
        topics: ['Spirituality', 'Sacrifice', 'Enemies (Secret)', 'The Unknown']
    }
];
//# sourceMappingURL=house.info.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house_info__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });

var House = (function () {
    function House(number) {
        this.number = number;
        var info = __WEBPACK_IMPORTED_MODULE_0__house_info__["a" /* houseInfo */].find(function (i) { return i.number === number; });
        this.title = info.title;
        this.description = info.description;
        this.topics = info.topics.sort();
        this.phrase = info.phrase;
        this.sign = info.sign;
    }
    return House;
}());

House.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
House.houses = House.numbers.map(function (number) { return new House(number); });
//# sourceMappingURL=house.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(274);
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
        this.color = '';
    }
    TetragramComponent.prototype.ngOnInit = function () {
        if (this.tetragram && this.color === 'planet') {
            this.color = this.tetragram.planet.toLowerCase();
        }
    };
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", String)
], TetragramComponent.prototype, "color", void 0);
TetragramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/'<div class="tetragram" [ngClass]="color">\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row0)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row1)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row2)}}\n  </div>\n  <div class="tetragram-row">\n    {{renderRow(tetragram.row3)}}\n  </div>\n</div>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/
    }),
    __metadata("design:paramtypes", [])
], TetragramComponent);

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__house__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placement_type__ = __webpack_require__(281);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });


var Placement = (function () {
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
                _this.setTypeIfUndefined(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__placement_type__["b" /* getTypeFromKey */])(key));
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__placement_type__["c" /* getTypeAsString */])(this.type);
    };
    Placement.prototype.getTypeColor = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__placement_type__["d" /* getTypeColor */])(this.type);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTypeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTypeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTypeFromKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTypeAsStringFromKey; });
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placement_item__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tetragram_tetragram_module__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementItemComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlacementItemComponentModule = (function () {
    function PlacementItemComponentModule() {
    }
    return PlacementItemComponentModule;
}());
PlacementItemComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */]),
            __WEBPACK_IMPORTED_MODULE_3__tetragram_tetragram_module__["a" /* TetragramComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__placement_item__["a" /* PlacementItemComponent */]
        ]
    })
], PlacementItemComponentModule);

//# sourceMappingURL=placement-item.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_placement__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacementItemComponent = (function () {
    function PlacementItemComponent() {
    }
    return PlacementItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_placement__["a" /* Placement */])
], PlacementItemComponent.prototype, "placement", void 0);
PlacementItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'placement-item',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/placement-item/placement-item.html"*/'<button ion-item text-wrap detail-push>\n\n  <tetragram item-left\n    [tetragram]="placement.tetragram"\n    [color]="placement.getTypeColor()">\n  </tetragram>\n\n  {{placement.getMeaning()}}\n\n</button>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/placement-item/placement-item.html"*/
    }),
    __metadata("design:paramtypes", [])
], PlacementItemComponent);

//# sourceMappingURL=placement-item.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram_tetragram_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tetragram_item__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramItemComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TetragramItemComponentModule = (function () {
    function TetragramItemComponentModule() {
    }
    return TetragramItemComponentModule;
}());
TetragramItemComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */]),
            __WEBPACK_IMPORTED_MODULE_0__tetragram_tetragram_module__["a" /* TetragramComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__tetragram_item__["a" /* TetragramItemComponent */]
        ]
    })
], TetragramItemComponentModule);

//# sourceMappingURL=tetragram-item.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TetragramItemComponent = (function () {
    function TetragramItemComponent() {
    }
    return TetragramItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tetragram__["a" /* Tetragram */])
], TetragramItemComponent.prototype, "tetragram", void 0);
TetragramItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'tetragram-item',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/tetragram-item/tetragram-item.html"*/'<button ion-item text-wrap detail-push>\n\n  <tetragram [tetragram]="tetragram" item-left [color]="\'planet\'"></tetragram>\n\n  {{tetragram.name}}\n\n</button>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/tetragram-item/tetragram-item.html"*/
    }),
    __metadata("design:paramtypes", [])
], TetragramItemComponent);

//# sourceMappingURL=tetragram-item.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_placement__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TetragramPage = (function () {
    function TetragramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tetragram = navParams.get('tetragram');
        this.placements = __WEBPACK_IMPORTED_MODULE_2__models_placement__["a" /* Placement */].getPlacementsForTetragram(this.tetragram);
        this.details = [
            {
                name: 'Meaning',
                value: this.tetragram.desc
            },
            {
                name: 'Keyword',
                value: this.tetragram.phrase
            },
            {
                name: 'Planet',
                value: this.tetragram.planet,
                class: this.tetragram.planet.toLowerCase()
            },
        ];
    }
    TetragramPage.prototype.showTetragram = function (tetragram) {
        this.navCtrl.push('TetragramPage', { tetragram: tetragram });
    };
    TetragramPage.prototype.showPlacement = function (placement) {
        this.navCtrl.push('PlacementPage', { placement: placement });
    };
    return TetragramPage;
}());
TetragramPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({}),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/tetragram/tetragram.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{tetragram.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="big tetragram">\n    <tetragram [tetragram]="tetragram" color="planet"></tetragram>\n  </div>\n\n  <ion-grid>\n    <ion-row *ngFor="let detail of details">\n      <ion-col col-4>{{detail.name}}</ion-col>\n      <ion-col col-8 [ngClass]="detail.class">{{detail.value}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list no-lines>\n\n    <ion-list-header>Related Tetragrams</ion-list-header>\n\n    <ion-item-divider>Reverse</ion-item-divider>\n    <tetragram-item [tetragram]="tetragram.reversed()" (tap)="showTetragram(tetragram.reversed())"></tetragram-item>\n\n    <ion-item-divider>Inverse</ion-item-divider>\n    <tetragram-item [tetragram]="tetragram.inversed()" (tap)="showTetragram(tetragram.inversed())"></tetragram-item>\n\n    <ion-item-divider>Converse</ion-item-divider>\n    <tetragram-item [tetragram]="tetragram.conversed()" (tap)="showTetragram(tetragram.conversed())"></tetragram-item>\n\n  </ion-list>\n\n  <ion-list no-lines>\n\n    <ion-list-header>Placements</ion-list-header>\n\n    <ion-item-group *ngFor="let placement of placements">\n      <ion-item-divider>House of {{placement.house.title}}</ion-item-divider>\n      <placement-item [placement]="placement" (tap)="showPlacement(placement)"></placement-item>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/tetragram/tetragram.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TetragramPage);

//# sourceMappingURL=tetragram.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map