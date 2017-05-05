
export class Tetragram {

  name: string
  desc: string
  good: boolean
  rules: number[]
  exalted: number[]
  fall: number[]
  detriment: number[]
  triplicity: number[]
  phrase: string
  houseMeanings: string[]
  planet: string
  dots: number
  sign: string

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number = Math.floor(Math.random() * 15)) {
    let info: TetragramInfo = tetragramInfo[key]
    this.name = info.name
    this.desc = info.desc
    this.good = info.good
    this.rules = info.rules
    this.exalted = info.exalted
    this.fall = info.fall
    this.detriment = info.detriment
    this.triplicity = info.triplicity
    this.phrase = info.phrase
    this.houseMeanings = info.houseMeanings
    this.planet = info.planet
    this.dots = info.dots
    this.sign = info.sign

    this.row0 = (key >> 0) % 2
    this.row1 = (key >> 1) % 2
    this.row2 = (key >> 2) % 2
    this.row3 = (key >> 3) % 2
  }

  add(tetragram: Tetragram): Tetragram {
    let row0 = (this.row0 + tetragram.row0 + 1) % 2
    let row1 = (this.row1 + tetragram.row1 + 1) % 2
    let row2 = (this.row2 + tetragram.row2 + 1) % 2
    let row3 = (this.row3 + tetragram.row3 + 1) % 2
    let key = (row3 << 3) + (row2 << 2) + (row1 << 1) + (row0 << 0)
    return new Tetragram(key)
  }

  getHouseMeaning(houseNumber: number) {
    return this.houseMeanings[houseNumber - 1]
  }

  static generateKey(num1, num2, num3, num4): number {
    let row1 = num1 ? (num1 % 2) * 1 : 0
    let row2 = num2 ? (num2 % 2) * 2 : 0
    let row3 = num3 ? (num3 % 2) * 4 : 0
    let row4 = num4 ? (num4 % 2) * 8 : 0
    let key = row1 + row2 + row3 + row4
    return key
  }
}

export interface TetragramInfo {
  key: number
  name: string
  // translation: string
  desc: string
  planet?: string
  phrase: string
  houseMeanings: string[]
  rules: number[]
  good: boolean
  dots: number
  exalted: number[]
  fall: number[]
  detriment: number[]
  sign: string
  triplicity: number[]
}

export const tetragramInfo: TetragramInfo[] = [
  {
    key: 0,
    name: 'Via',
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
    phrase: 'Clearing a path',
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
    fall: [6, 10],
    detriment: [1, 8, 3, 6],
    triplicity: [],
    dots: 5,
    sign: 'Sagittarius',
    good: true,
    phrase: 'A new beginning',
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
    fall: [6],
    detriment: [1, 8],
    triplicity: [3, 11],
    dots: 5,
    sign: 'Libra',
    good: true,
    phrase: 'Beautification',
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
    fall: [7],
    detriment: [11],
    triplicity: [1, 9],
    dots: 6,
    sign: 'Leo',
    good: true,
    phrase: 'Success',
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
    fall: [4],
    detriment: [2, 7],
    triplicity: [5, 9],
    dots: 5,
    sign: 'Aries',
    good: false,
    phrase: 'Command',
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
    phrase: 'Restriction',
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
    phrase: 'An end',
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
    fall: [5],
    detriment: [9, 12],
    triplicity: [2, 10],
    dots: 6,
    sign: 'Virgo',
    good: true,
    phrase: 'Reconciliation',
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
    phrase: 'Learning',
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
    fall: [7],
    detriment: [11],
    triplicity: [1, 9],
    dots: 6,
    sign: 'Leo',
    good: true,
    phrase: 'Improvement',
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
    phrase: 'Consensus',
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
]
