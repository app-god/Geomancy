import { LibraryItem } from './library'

export class House implements LibraryItem {
  topics: string[]
  tetragram?
  ruler: string
  exaltation?: string

  // library item
  name: string
  page = 'HousePage'

  constructor(public number: number) {
    let info: HouseInfo = houseInfo[number - 1]
    this.topics = info.topics
    this.ruler = info.ruler
    this.exaltation = info.exaltation
    this.name = 'House ' + number
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
    topics: ['Self', 'Life', 'Health']
  },
  {
    number: 2,
    ruler: 'Venus',
    exaltation: 'Moon',
    topics: ['Money', 'Property', 'Personal Worth']
  },
  {
    number: 3,
    ruler: 'Mercury',
    topics: ['Brother', 'Sister', 'News', 'Short Journeys']
  },
  {
    number: 4,
    ruler: 'Moon',
    exaltation: 'Jupiter',
    topics: ['Father', 'Inheritence', 'Conclusion']
  },
  {
    number: 5,
    ruler: 'Sun',
    topics: ['Children', 'Pleasure', 'Feasts', 'Speculation']
  },
  {
    number: 6,
    ruler: 'Mercury',
    exaltation: 'Mercury',
    topics: ['Servants', 'Sickness', 'Uncles', 'Aunts', 'Animals']
  },
  {
    number: 7,
    ruler: 'Venus',
    exaltation: 'Saturn',
    topics: ['Love', 'Marriage', 'Husband', 'Wife', 'Partnerships', 'Public Enemies', 'Lawsuits']
  },
  {
    number: 8,
    ruler: 'Mars',
    topics: ['Deaths', 'Wills', 'Legacies', 'Pain', 'Anxiety']
  },
  {
    number: 9,
    ruler: 'Jupiter',
    topics: ['Long journeys', 'Voyages', 'Science', 'Religion', 'Art', 'Visions', 'Divinations']
  },
  {
    number: 10,
    ruler: 'Saturn',
    exaltation: 'Mars',
    topics: ['Mother', 'Rank', 'Honor', 'Profession', 'Authority', 'Employment']
  },
  {
    number: 11,
    ruler: 'Saturn',
    topics: ['Friends', 'Hopes', 'Wishes']
  },
  {
    number: 12,
    ruler: 'Jupiter',
    exaltation: 'Venus',
    topics: ['Sorrows', 'Fears', 'Punishments', 'Secret Enemies', 'Institutions', 'Unseen Dangers', 'Restriction']
  }
]
