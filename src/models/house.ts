import { Tetragram } from './tetragram';

import { Placement } from "./placement";

export class House {
  static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  topics: string[]
  phrase: string
  title: string
  description: string
  placement: Placement

  constructor(public number: number, public tetragram: Tetragram) {
    let info: HouseInfo = houseInfo[number - 1]
    this.topics = info.topics.sort()
    this.phrase = info.phrase
    this.title = info.title
    this.description = info.title
    this.getPlacement()
  }

  static getHousesWithTetragram(tetragram: Tetragram): House[] {
    let houses = House.numbers.map(number => {
      return new House(number, tetragram)
    })
    return houses
  }

  getTetragramMeaning(): string {
    return this.tetragram.getHouseMeaning(this.number)
  }

  getPlacement() {

    if (this.number == 1) {
      if (['Rubeus', 'Cauda Draconis'].indexOf(this.tetragram.name) >= 0) {
        this.placement = new Placement('warning')
      }
    }

    let keys = ['rules', 'exalted', 'triplicity', 'detriment', 'fall']
    
    keys.forEach(key => {
      if (this.tetragram[key].indexOf(this.number) >= 0) {
        this.placement = this.placement || new Placement(key)
      }
    })

    this.placement = this.placement || new Placement('normal')
  }

}

interface HouseInfo {
  number: number
  title: string
  description: string
  phrase: string
  topics: string[]
}

export const houseInfo: HouseInfo[] = [
  {
    number: 1,
    title: 'House of Self',
    description: '',
    phrase: 'yourself',
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
    phrase: 'perception',
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
]
