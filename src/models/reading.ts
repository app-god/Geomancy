import { Placement } from './placement';
import { Tetragram } from './tetragram'
import { House } from './house'

export class Reading {
  question?: string
  topic?: string
  houses: House[]

  mother0: Tetragram
  mother1: Tetragram
  mother2: Tetragram
  mother3: Tetragram
  daughter0: Tetragram
  daughter1: Tetragram
  daughter2: Tetragram
  daughter3: Tetragram
  nephew0: Tetragram
  nephew1: Tetragram
  nephew2: Tetragram
  nephew3: Tetragram
  witness0: Tetragram
  witness1: Tetragram
  judge: Tetragram
  reconciler: Tetragram

  mothers: Tetragram[]
  daughters: Tetragram[]
  nephews: Tetragram[]
  witnesses: Tetragram[]

  date: number
  partOfFortune: number
  readingData: ReadingData

  constructor(data: ReadingData) {

    this.readingData = data

    this.question = data.question
    this.topic = data.topic

    this.date = data.date

    this.mother0 = new Tetragram(data.key0)
    this.mother1 = new Tetragram(data.key1)
    this.mother2 = new Tetragram(data.key2)
    this.mother3 = new Tetragram(data.key3)

    this.mothers = [this.mother0, this.mother1, this.mother2, this.mother3]

    this.daughter0 = this.createFromRows(
      this.mother0.row0,
      this.mother1.row0,
      this.mother2.row0,
      this.mother3.row0
    )
    this.daughter1 = this.createFromRows(
      this.mother0.row1,
      this.mother1.row1,
      this.mother2.row1,
      this.mother3.row1
    )
    this.daughter2 = this.createFromRows(
      this.mother0.row2,
      this.mother1.row2,
      this.mother2.row2,
      this.mother3.row2
    )
    this.daughter3 = this.createFromRows(
      this.mother0.row3,
      this.mother1.row3,
      this.mother2.row3,
      this.mother3.row3
    )
    this.daughters = [this.daughter0, this.daughter1, this.daughter2, this.daughter3]
    this.nephew0 = this.mother0.add(this.mother1)
    this.nephew1 = this.mother2.add(this.mother3)
    this.nephew2 = this.daughter0.add(this.daughter1)
    this.nephew3 = this.daughter2.add(this.daughter3)
    this.nephews = [this.nephew0, this.nephew1, this.nephew2, this.nephew3]

    this.witness0 = this.nephew0.add(this.nephew1)
    this.witness1 = this.nephew2.add(this.nephew3)
    this.witnesses = [this.witness0, this.witness1]

    this.judge = this.witness0.add(this.witness1)
    this.reconciler = this.mother0.add(this.judge)

    this.partOfFortune = this.getPartOfFortune()

    this.houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      .map(number => {
        let tetragram = this.getTetragramForHouse(number)
        return new House(number, tetragram)
      })
  }

  createFromRows(row0, row1, row2, row3) {
    let r0 = row0 % 2
    let r1 = row1 % 2
    let r2 = row2 % 2
    let r3 = row3 % 2
    let key = (r3 << 3) + (r2 << 2) + (r1 << 1) + (r0 << 0)
    return new Tetragram(key)
  }

  getTetragramForHouse(house: number): Tetragram {
    let tetragrams: Tetragram[] = [
      this.mother1, this.daughter1, this.nephew1,
      this.mother2, this.daughter2, this.nephew2,
      this.mother3, this.daughter3, this.nephew3,
      this.mother0, this.daughter0, this.nephew0
    ]

    return tetragrams[house - 1]
  }

  getPartOfFortune(): number {
    /*
      return house number where Part of Fortune resides
    */
    let partOfFortune = [
      this.mother0, this.mother1, this.mother2, this.mother3,
      this.daughter0, this.daughter1, this.daughter2, this.daughter3,
      this.nephew0, this.nephew1, this.nephew2, this.nephew3
    ].map((tetragram) => {
      return tetragram.dots
    }).reduce((a, b) => {
      return a + b
    }, 0) % 12

    if (partOfFortune == 0) {
      partOfFortune = 12
    }

    return partOfFortune
  }

  getQuestion() {
    return this.question || 'Your question remains hidden'
  }

  getReadingData() {
    return this.readingData
  }

  getHouse(number: number) {
    return this.houses[number - 1]
  }

  getTopicHouse() {
    if (!this.topic) return null

    return this.houses.find(house => {
      return house.topics.indexOf(this.topic) >= 0
    })
  }
}

export interface ReadingData {
  question: string
  topic: string
  date: number
  key0: number
  key1: number
  key2: number
  key3: number
}

export interface ReadingSaveData extends ReadingData {
  judgeKey: number
}
