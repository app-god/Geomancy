import { tetragramInfo } from './tetragram'

export class House {
  topics: string[]
  tetragram?
  ruler: string
  exaltation?: string

  constructor(public number: number) {
    let info: HouseInfo = houseInfo[number - 1]
    this.topics = info.topics
    this.ruler = info.ruler
    this.exaltation = info.exaltation
  }

  getTetragramNamesWithMeanings(): any[] {
    let namesWithMeanings = tetragramInfo.map(info => {
      return {
        name: info.name,
        meaning: info.houseMeanings[this.number - 1]
      }
    })
    namesWithMeanings.sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
    })
    return namesWithMeanings
  }
}

interface HouseInfo {
  number: number
  topics: string[]
  ruler: string
  exaltation?: string
}

const houseInfo: HouseInfo[] = [
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
]
