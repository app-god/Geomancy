
export class Tetragram {

  name: string
  desc: string

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number = Math.floor(Math.random() * 15)) {
    this.name = tetragramData[key].name
    this.desc = tetragramData[key].desc

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

var tetragramData = [
  {
    key: 0,
    name: 'Via',
    desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.'
  },
  {
    key: 1,
    name: 'Caput Draconis',
    desc: 'Good with good, evil with evil. Gives good issue for gain.'
  },
  {
    key: 2,
    name: 'Puella',
    desc: 'Good in all demands, especially in those things relating to women.'
  },
  {
    key: 3,
    name: 'Fortuna Major',
    desc: 'Good for gain in all things where a person has hopes to win.'
  },
  {
    key: 4,
    name: 'Puer',
    desc: 'Evil in most demands, except in those things relating to war or love.'
  },
  {
    key: 5,
    name: 'Acquisitio',
    desc: 'Generally good for profit and gain.'
  },
  {
    key: 6,
    name: 'Carcer',
    desc: 'Generally evil. Delay, binding, bar, restriction.'
  },
  {
    key: 7,
    name: 'Tristitia',
    desc: 'Evil in almost all things.'
  },
  {
    key: 8,
    name: 'Cauda Draconis',
    desc: 'Good with evil, and evil with good. Good for loss, and for passing out of an affair.'
  },
  {
    key: 9,
    name: 'Conjunctio',
    desc: 'Good with good, or evil with evil. Recovery from things lost.'
  },
  {
    key: 10,
    name: 'Amissio',
    desc: 'Good for loss of substance and sometimes for love, but very bad for gain.'
  },
  {
    key: 11,
    name: 'Albus',
    desc: 'Good for profit and for entering into a place or undertaking.'
  },
  {
    key: 12,
    name: 'Fortuna Minor',
    desc: 'Good in any manner in which a person wishes to proceed quickly.'
  },
  {
    key: 13,
    name: 'Rubeus',
    desc: 'Evil in all that is good and good in all that is evil.'
  },
  {
    key: 14,
    name: 'Laetitia',
    desc: 'Good for joy, present or to come.'
  },
  {
    key: 15,
    name: 'Populus',
    desc: 'Sometimes good and sometimes bad; good with good, and evil with evil.'
  }
]
