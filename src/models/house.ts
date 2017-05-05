
export class House {
  topics: string[]
  tetragram?
  phrase: string

  constructor(public number: number) {
    let info: HouseInfo = houseInfo[number - 1]
    this.topics = info.topics
    this.phrase = info.phrase
  }
}

interface HouseInfo {
  number: number
  phrase: string
  topics: string[]
}

const houseInfo: HouseInfo[] = [
  {
    number: 1,
    phrase: 'yourself',
    topics: ['Self', 'Life', 'Health']
  },
  {
    number: 2,
    phrase: 'wealth',
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
    phrase: 'daily work',
    topics: ['Servants', 'Sickness', 'Uncles', 'Aunts', 'Animals']
  },
  {
    number: 7,
    phrase: 'love',
    topics: ['Love', 'Marriage', 'Husband', 'Wife', 'Partnerships', 'Public Enemies', 'Lawsuits']
  },
  {
    number: 8,
    phrase: 'transformation',
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
    phrase: 'community',
    topics: ['Friends', 'Hopes', 'Wishes']
  },
  {
    number: 12,
    phrase: 'the unconscious',
    topics: ['Sorrows', 'Fears', 'Punishments', 'Secret Enemies', 'Institutions', 'Unseen Dangers', 'Restriction']
  }
]
