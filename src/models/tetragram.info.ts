
export interface TetragramInfo {

  key: number

  name: string
  image: string
  translation: string
  desc: string
  planet: string
  phrase: string
  sign: string
  houseMeanings: string[]
  element: string

  rules: number[]
  dots: number
  exalted: number[]
  fall: number[]
  detriment: number[]
  triplicity: number[]
}

export const tetragramInfo: TetragramInfo[] = [
  {
    key: 0,
    name: 'Via',
    image: 'A road or a path',
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
    image: 'The north node of the moon (☊).',
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
    image: 'A woman with exaggerated breasts.',
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
    image: 'Blessings growing from the earth and being fruitful in the air.',
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
    image: 'An erect phallus',
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
    phrase: 'Intensity',
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
    image: 'Two cups turned upright.',
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
    image: 'The outline of an enclosure.',
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
    image: 'A broken arch or a knife being driven into the ground.',
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
    image: 'The south node of the moon (☋).',
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
    image: 'A joining of two figures.',
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
    image: 'Two bowls turned upside-down.',
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
    image: 'An upright glass.',
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
      'Good except for war.',
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
    image: 'Beams of light coming from the Sun.',
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
    image: 'An overturned glass.',
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
    image: 'An arch, fountain, or rainbow.',
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
    image: 'A group of people.',
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
]
