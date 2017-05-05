
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
    phrase: 'your self',
    topics: ['Self', 'Life', 'Health']
  },
  {
    number: 2,
    phrase: 'wealth',
    topics: ['Wealth', 'Property', 'Self-esteem']
  },
  {
    number: 3,
    phrase: 'friendships',
    topics: ['Siblings', 'Neighbors', 'Short Journeys']
  },
  {
    number: 4,
    phrase: 'family',
    topics: ['Family', 'Inheritence', 'Home']
  },
  {
    number: 5,
    phrase: 'creativity',
    topics: ['Children', 'Pleasure', 'Gambling']
  },
  {
    number: 6,
    phrase: 'daily work',
    topics: ['Work', 'Habits', 'Service']
  },
  {
    number: 7,
    phrase: 'love',
    topics: ['Marriage', 'Partnerships', 'Public Enemies']
  },
  {
    number: 8,
    phrase: 'transformation',
    topics: ['Deaths', 'Occult Abilities', 'Sex']
  },
  {
    number: 9,
    phrase: 'philosophy',
    topics: ['Long Journeys', 'Religion', 'Visions']
  },
  {
    number: 10,
    phrase: 'reputation',
    topics: ['Honor', 'Career', 'Reputation']
  },
  {
    number: 11,
    phrase: 'community',
    topics: ['Society', 'Hopes', 'Humanity']
  },
  {
    number: 12,
    phrase: 'the unknown',
    topics: ['Spirituality', 'Sacrifice', 'Hidden Enemies']
  }
]
