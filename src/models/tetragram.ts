
export class Tetragram {

  name: string

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number) {
    this.name = tetragramData[key].name

    this.row0 = (key >> 0) % 2
    this.row1 = (key >> 1) % 2
    this.row2 = (key >> 2) % 2
    this.row3 = (key >> 3) % 2
  }
}

var tetragramData = [
  {
    key: 0,
    name: 'Via'
  },
  {
    key: 1,
    name: 'Caput Draconis'
  },
  {
    key: 2,
    name: 'Puella'
  },
  {
    key: 3,
    name: 'Fortuna Major'
  },
  {
    key: 4,
    name: 'Puer'
  },
  {
    key: 5,
    name: 'Acquisitio'
  },
  {
    key: 6,
    name: 'Carcer'
  },
  {
    key: 7,
    name: 'Tristitia'
  },
  {
    key: 8,
    name: 'Cauda Draconis'
  },
  {
    key: 9,
    name: 'Conjunctio'
  },
  {
    key: 10,
    name: 'Amissio'
  },
  {
    key: 11,
    name: 'Albus'
  },
  {
    key: 12,
    name: 'Fortuna Minor'
  },
  {
    key: 13,
    name: 'Rubeus'
  },
  {
    key: 14,
    name: 'Laetitia'
  },
  {
    key: 15,
    name: 'Populus'
  }
]
