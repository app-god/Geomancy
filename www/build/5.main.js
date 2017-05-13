webpackJsonp([5],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new__ = __webpack_require__(283);
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tetragram; });
/* unused harmony export tetragramInfo */
var Tetragram = (function () {
    function Tetragram(key) {
        if (key === void 0) { key = Math.floor(Math.random() * 15); }
        this.key = key;
        var info = tetragramInfo[key];
        this.name = info.name;
        this.translation = info.translation;
        this.desc = info.desc;
        this.good = info.good;
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

var tetragramInfo = [
    {
        key: 0,
        name: 'Via',
        translation: 'Way',
        desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.',
        planet: 'Moon',
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 4,
        sign: 'Cancer',
        good: false,
        phrase: 'Change',
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
        translation: "Dragon's Head",
        desc: 'Good with good, evil with evil. Gives good issue for gain.',
        planet: 'Venus',
        rules: [2, 7, 9, 12],
        exalted: [12, 4],
        fall: [6, 10],
        detriment: [1, 8, 3, 6],
        triplicity: [],
        dots: 5,
        sign: 'Sagittarius',
        good: true,
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
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [3, 11],
        dots: 5,
        sign: 'Libra',
        good: true,
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
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        good: true,
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
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [5, 9],
        dots: 5,
        sign: 'Aries',
        good: false,
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
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [1, 5],
        dots: 6,
        sign: 'Sagittarius',
        good: true,
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
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [2, 6],
        dots: 6,
        sign: "Capricorn",
        good: false,
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
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [3, 7],
        dots: 7,
        sign: 'Aquarius',
        good: false,
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
        rules: [8, 10, 11],
        exalted: [10, 7],
        fall: [4, 1],
        detriment: [2, 7, 4, 5],
        triplicity: [],
        dots: 5,
        sign: 'Virgo',
        good: false,
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
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [2, 10],
        dots: 6,
        sign: 'Virgo',
        good: true,
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
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [10],
        dots: 6,
        sign: 'Taurus',
        good: false,
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
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [7, 11],
        dots: 7,
        sign: 'Gemini',
        good: true,
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
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        good: true,
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
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [12],
        dots: 7,
        sign: 'Scorpio',
        good: false,
        phrase: 'Destruction',
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
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [4, 8],
        dots: 7,
        sign: 'Pisces',
        good: true,
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
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 8,
        sign: 'Cancer',
        good: true,
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
//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placement__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return House; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return houseInfo; });

var House = (function () {
    function House(number, tetragram) {
        this.number = number;
        this.tetragram = tetragram;
        var info = houseInfo[number - 1];
        this.topics = info.topics.sort();
        this.phrase = info.phrase;
        this.title = info.title;
        this.description = info.title;
        this.getPlacement();
    }
    House.getHousesWithTetragram = function (tetragram) {
        var houses = House.numbers.map(function (number) {
            return new House(number, tetragram);
        });
        return houses;
    };
    House.prototype.getTetragramMeaning = function () {
        return this.tetragram.getHouseMeaning(this.number);
    };
    House.prototype.getPlacement = function () {
        var _this = this;
        if (this.number == 1) {
            if (['Rubeus', 'Cauda Draconis'].indexOf(this.tetragram.name) >= 0) {
                this.placement = new __WEBPACK_IMPORTED_MODULE_0__placement__["a" /* Placement */]('warning');
            }
        }
        var keys = ['rules', 'exalted', 'triplicity', 'detriment', 'fall'];
        keys.forEach(function (key) {
            if (_this.tetragram[key].indexOf(_this.number) >= 0) {
                _this.placement = _this.placement || new __WEBPACK_IMPORTED_MODULE_0__placement__["a" /* Placement */](key);
            }
        });
        this.placement = this.placement || new __WEBPACK_IMPORTED_MODULE_0__placement__["a" /* Placement */]('normal');
    };
    return House;
}());

House.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var houseInfo = [
    {
        number: 1,
        title: 'House of Self',
        description: '',
        phrase: 'your self',
        topics: ['Self', 'Life', 'Health']
    },
    {
        number: 2,
        title: 'House of Resources',
        description: '',
        phrase: 'wealth',
        topics: ['Wealth', 'Resources', 'Self-esteem']
    },
    {
        number: 3,
        title: 'House of Communication',
        description: '',
        phrase: 'friendships',
        topics: ['Siblings', 'Friends', 'Short Journeys']
    },
    {
        number: 4,
        title: 'House of Home and Family',
        description: '',
        phrase: 'your home',
        topics: ['Family', 'Inheritence', 'Home']
    },
    {
        number: 5,
        title: 'House of Pleasure and Creativity',
        description: '',
        phrase: 'creativity',
        topics: ['Children', 'Pleasure', 'Gambling']
    },
    {
        number: 6,
        title: 'House of Work and Service',
        description: '',
        phrase: 'daily work',
        topics: ['Work', 'Habits', 'Service']
    },
    {
        number: 7,
        title: 'House of Partnership',
        description: '',
        phrase: 'partnerships',
        topics: ['Marriage', 'Partnerships', 'Public Enemies']
    },
    {
        number: 8,
        title: 'House of Power and the Psyche',
        description: '',
        phrase: 'power',
        topics: ['Deaths', 'Occult Abilities', 'Sex']
    },
    {
        number: 9,
        title: 'House of Philosophy and Education',
        description: '',
        phrase: 'education',
        topics: ['Long Journeys', 'Religion', 'Education']
    },
    {
        number: 10,
        title: 'House of Career and Public Life',
        description: '',
        phrase: 'career',
        topics: ['Honor', 'Career', 'Reputation']
    },
    {
        number: 11,
        title: 'House of the World',
        description: '',
        phrase: 'the world',
        topics: ['Society', 'Hopes', 'Humanity']
    },
    {
        number: 12,
        title: 'House of Spirit',
        description: '',
        phrase: 'spirit',
        topics: ['Spirituality', 'Sacrifice', 'Hidden Enemies']
    }
];
//# sourceMappingURL=house.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Placement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlacementType; });
var Placement = (function () {
    function Placement(key) {
        this.type = Placement.getTypeFromKey(key);
    }
    Placement.keyToString = function (key) {
        switch (key) {
            case 'warning':
                return 'Warning!';
            case 'rules':
                return 'Strongest';
            case 'exalted':
                return 'Very Strong';
            case 'triplicity':
                return 'Strong';
            case 'detriment':
                return 'Very Weak';
            case 'fall':
                return 'Weakest';
            default:
                return 'Weak';
        }
    };
    Placement.getTypeFromKey = function (key) {
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
    Placement.prototype.getColor = function () {
        switch (this.type) {
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
    Placement.prototype.getTypeString = function () {
        switch (this.type) {
            case PlacementType.Warning:
                return 'Warning';
            case PlacementType.Strongest:
                return 'Strongest';
            case PlacementType.VeryStrong:
                return 'Very Strong';
            case PlacementType.Strong:
                return 'Strong';
            case PlacementType.Weak:
                return 'Weak';
            case PlacementType.VeryWeak:
                return 'Very Weak';
            case PlacementType.Weakest:
                return 'Weakest';
        }
    };
    Placement.prototype.getIcon = function () {
        var icon;
        var prefix = '/assets/image/';
        switch (this.type) {
            case PlacementType.Warning:
                icon = 'skull.png';
                break;
            case PlacementType.Strongest:
                icon = 'battery4.png';
                break;
            case PlacementType.VeryStrong:
                icon = 'battery3.png';
                break;
            case PlacementType.Strong:
                icon = 'battery2.png';
                break;
            case PlacementType.VeryWeak:
                icon = 'battery1.png';
                break;
            case PlacementType.Weakest:
                icon = 'battery0.png';
                break;
            default:
                return null;
        }
        return prefix + icon;
    };
    return Placement;
}());

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
//# sourceMappingURL=placement.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_house__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tetragram__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
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
    function NewPage(navCtrl, modCtrl, loadingCtrl, storage, alertCtrl, actionCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.formBuilder = formBuilder;
        this.startDisabled = false;
        this.readingType = 'automatic';
        this.question = '';
        this.topic = '';
        this.row = {};
        var nestedTopics = __WEBPACK_IMPORTED_MODULE_3__models_house__["b" /* houseInfo */].map(function (house) { return house.topics; });
        this.topics = [].concat.apply([], nestedTopics);
        this.topics.sort();
        this.topics.unshift('None');
        this.topic = this.topics[0];
        // manual
        this.manualForm = formBuilder.group({
            row_1: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_2: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_3: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_4: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_5: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_6: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_7: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_8: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_9: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_10: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_11: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_12: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_13: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_14: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_15: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_16: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]
        });
    }
    NewPage.prototype.createReading = function () {
        var _this = this;
        this.startDisabled = true;
        var readingData;
        if (this.topic == 'None') {
            this.topic = '';
        }
        // generate data for automatic readings
        if (this.readingType == 'automatic') {
            readingData = {
                question: this.question,
                topic: this.topic,
                date: Date.now(),
                key0: Math.floor(Math.random() * 15),
                key1: Math.floor(Math.random() * 15),
                key2: Math.floor(Math.random() * 15),
                key3: Math.floor(Math.random() * 15)
            };
        }
        // generate data for manual readings
        if (this.readingType == 'manual') {
            var row = this.row;
            readingData = {
                question: this.question,
                topic: this.topic,
                date: Date.now(),
                key0: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[1], row[2], row[3], row[4]),
                key1: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[5], row[6], row[7], row[8]),
                key2: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[9], row[10], row[11], row[12]),
                key3: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[13], row[14], row[15], row[16])
            };
        }
        // clear manual data
        Object.keys(this.row).forEach(function (r) {
            _this.row[r] = '';
        });
        // reset inputs
        this.question = '';
        this.topic = 'None';
        this.startDisabled = false;
        this.navCtrl.push('ReadingPage', {
            question: readingData.question,
            topic: readingData.topic,
            date: readingData.date,
            key0: readingData.key0,
            key1: readingData.key1,
            key2: readingData.key2,
            key3: readingData.key3
        });
    };
    NewPage.prototype.showMore = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Load Reading',
                    handler: function () {
                        _this.navCtrl.push('HistoryPage');
                    }
                },
                {
                    text: 'Show Introduction',
                    handler: function () {
                        var introMod = _this.modCtrl.create('TutorialPage');
                        introMod.present();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-new',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Reading</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showMore()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div padding-vertical>\n    <ion-segment [(ngModel)]="readingType">\n      <ion-segment-button value="automatic">Automatic</ion-segment-button>\n      <ion-segment-button value="manual">Manual</ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <ion-list no-lines>\n\n    <ion-item padding>\n      <ion-label stacked>Question</ion-label>\n      <ion-textarea [(ngModel)]="question" rows="3"\n        placeholder="Enter question here"></ion-textarea>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label stacked>Topic</ion-label>\n      <ion-select [(ngModel)]="topic">\n        <ion-option\n          [selected]="t == topic"\n          [value]="t"\n          *ngFor="let t of topics">\n          {{t}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <p class="instructions" padding-vertical *ngIf="readingType == \'manual\'">\n    Make 16 rows of a random number of dots on the ground or on a piece of paper. Then, enter the number of dots in each row below.\n  </p>\n\n  <ion-list *ngIf="readingType == \'manual\'" no-lines>\n\n    <form [formGroup]="manualForm">\n\n      <ion-item *ngFor="let num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]">\n\n        <ion-label fixed>Row {{num}}</ion-label>\n\n        <ion-input [formControlName]="\'row_\' + num" type="number" [(ngModel)]="row[num]"></ion-input>\n\n      </ion-item>\n\n    </form>\n  </ion-list>\n\n  <p *ngIf="readingType == \'manual\' && !manualForm.valid" class="instructions">\n    You must enter a number into each row before proceeding.\n  </p>\n\n  <button ion-button block large\n    *ngIf="readingType == \'manual\'"\n    color="primary"\n    (tap)="createReading()"\n    [disabled]="startDisabled || !manualForm.valid">\n    Create\n  </button>\n\n  <button ion-button block large\n    *ngIf="readingType == \'automatic\'"\n    color="primary"\n    (tap)="createReading()"\n    [disabled]="startDisabled">\n    Create\n  </button>\n\n  <p class="instructions" *ngIf="readingType == \'automatic\'">\n    <ion-icon name="information-circle"></ion-icon>\n    Manually generating the numbers is a more powerful way of forming the divination.\n  </p>\n\n  <br>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]])
], NewPage);

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map