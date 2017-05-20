import { TetragramInfo, tetragramInfo } from './tetragram.info'

export class Tetragram {

  static all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => {
    return new Tetragram(num)
  })

  name: string
  translation: string
  desc: string
  element: string
  rules: number[]
  exalted: number[]
  fall: number[]
  detriment: number[]
  triplicity: number[]
  phrase: string
  houseMeanings: string[]
  planet: string
  dots: number
  sign: string

  row0: number
  row1: number
  row2: number
  row3: number

  constructor(public key: number = Math.floor(Math.random() * 15)) {
    let info: TetragramInfo = tetragramInfo[key]
    this.name = info.name
    this.translation = info.translation
    this.desc = info.desc
    this.element = info.element
    this.rules = info.rules
    this.exalted = info.exalted
    this.fall = info.fall
    this.detriment = info.detriment
    this.triplicity = info.triplicity
    this.phrase = info.phrase
    this.houseMeanings = info.houseMeanings
    this.planet = info.planet
    this.dots = info.dots
    this.sign = info.sign
  }

  getRow(num: number): number {
    // get value of row (0 = 1 dot, 1 = 2 dots)
    let shift = num - 1
    let mask = 0x0001 << shift
    return (this.key & mask) >> shift
  }

  renderRow(num: number) {
    let row = this.getRow(num)
    if (row == 0)
      return '●'
    if (row == 1)
      return '● ●'
  }

  add(tetragram: Tetragram): Tetragram {
    // add two tetragrams
    let key = (15 - this.key ^ tetragram.key) % 16
    return new Tetragram(key)
  }

  getHouseMeaning(houseNumber: number) {
    return this.houseMeanings[houseNumber - 1]
  }

  reversed(): Tetragram {
    // flip entire tetragram
    let key = (this.key >> 3) % 2 * 1
            + (this.key >> 2) % 2 * 2
            + (this.key >> 1) % 2 * 4
            + (this.key >> 0) % 2 * 8
    return new Tetragram(key)
  }

  inversed(): Tetragram {
    let key = 15 ^ this.key
    return new Tetragram(key)
  }

  conversed(): Tetragram {
    return this.reversed().inversed()
  }

  static generateKey(num1, num2, num3, num4): number {
    let row1 = (num1 % 2) * 1
    let row2 = (num2 % 2) * 2
    let row3 = (num3 % 2) * 4
    let row4 = (num4 % 2) * 8
    let key = row1 + row2 + row3 + row4
    return key
  }

  static getAll(): Tetragram[] {
    return Tetragram.all
  }
}
