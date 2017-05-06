import { Tetragram } from './tetragram';

import { Placement } from "./placement";

export class House {
  topics: string[]
  phrase: string
  placement: Placement

  constructor(public number: number, public tetragram: Tetragram) {
    let info: HouseInfo = houseInfo[number - 1]
    this.topics = info.topics.sort()
    this.phrase = info.phrase
    this.getPlacement()
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
  phrase: string
  topics: string[]
}

export const houseInfo: HouseInfo[] = [
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
