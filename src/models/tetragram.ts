
export class Tetragram {

  name: string
  desc: string
  houseMeanings: string[]
  planet: string
  dots: number

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number = Math.floor(Math.random() * 15)) {
    let info: TetragramInfo = tetragramInfo[key]
    this.name = info.name
    this.desc = info.desc
    this.houseMeanings = info.houseMeanings
    this.planet = info.planet
    this.dots = info.dots

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
}

interface TetragramData {
  key: number
}

interface TetragramInfo {
  key: number
  name: string
  desc: string
  planet?: string
  houseMeanings: string[]
  rules: number[]
  dots: number
  // exalted: number[]
  // fall: number[]
  // detriment: number[]
  // sign?: string
  // strongTriplicity?: number[]
}

const tetragramInfo: TetragramInfo[] = [
  {
    key: 0,
    name: 'Via',
    desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.',
    planet: 'Moon',
    rules: [1, 8],
    dots: 4,
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
    planet: null,
    rules: [2, 7, 9, 12],
    dots: 5,
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
    dots: 5,
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
    planet: 'Moon',
    rules: [5],
    dots: 6,
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
    planet: '',
    rules: [1, 8],
    dots: 5,
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
    dots: 6,
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
    dots: 6,
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
    planet: 'Jupiter',
    rules: [10, 11],
    dots: 7,
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
    planet: null,
    rules: [8, 10, 11],
    dots: 5,
    houseMeanings: [
      'Good in all things.',
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
    key: 9,
    name: 'Conjunctio',
    desc: 'Good with good, or evil with evil. Recovery from things lost.',
    planet: 'Mercury',
    rules: [3, 6],
    dots: 6,
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
    dots: 6,
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
    dots: 7,
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
    dots: 6,
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
    dots: 7,
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
    dots: 7,
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
    dots: 8,
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
