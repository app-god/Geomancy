export class House {
  description: string
  tetragram?
  ruler: string
  exaltation?: string

  constructor(public number: number) {
    let info = houseInfo[number - 1]
    this.description = info.description
    this.ruler = info.ruler
    this.exaltation = info.exaltation
  }
}

interface HouseInfo {
  number: number
  description: string
  ruler: string
  exaltation?: string
}

const houseInfo: HouseInfo[] = [
  {
    number: 1,
    ruler: 'Mars',
    exaltation: '',
    description: 'Self'
  },
  {
    number: 2,
    ruler: 'Venus',
    exaltation: 'Moon',
    description: 'Wealth'
  },
  {
    number: 3,
    ruler: 'Mercury',
    description: 'Network'
  },
  {
    number: 4,
    ruler: 'Moon',
    exaltation: 'Jupiter',
    description: 'Home'
  },
  {
    number: 5,
    ruler: 'Sun',
    description: 'Creativity'
  },
  {
    number: 6,
    ruler: 'Mercury',
    exaltation: 'Mercury',
    description: 'Health'
  },
  {
    number: 7,
    ruler: 'Venus',
    exaltation: 'Saturn',
    description: 'Partners'
  },
  {
    number: 8,
    ruler: 'Mars',
    description: 'Transformation'
  },
  {
    number: 9,
    ruler: 'Jupiter',
    description: 'Meaning'
  },
  {
    number: 10,
    ruler: 'Saturn',
    exaltation: 'Mars',
    description: 'Career'
  },
  {
    number: 11,
    ruler: 'Saturn',
    description: 'Community'
  },
  {
    number: 12,
    ruler: 'Jupiter',
    exaltation: 'Venus',
    description: 'Sacrifice'
  }
]
