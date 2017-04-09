import { Tetragram } from './tetragram'

export class Reading {
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

  mothers: Tetragram[]
  daughters: Tetragram[]
  nephews: Tetragram[]
  witnesses: Tetragram[]

  date: number

  constructor(public question: string) {
    this.date = Date.now()
    this.mother0 = new Tetragram()
    this.mother1 = new Tetragram()
    this.mother2 = new Tetragram()
    this.mother3 = new Tetragram()
    this.mothers = [this.mother0, this.mother1, this.mother2, this.mother3]

    this.daughter0 = this.createKeyFromRows(
      this.mother0.row0,
      this.mother1.row0,
      this.mother2.row0,
      this.mother3.row0
    )
    this.daughter1 = this.createKeyFromRows(
      this.mother0.row1,
      this.mother1.row1,
      this.mother2.row1,
      this.mother3.row1
    )
    this.daughter2 = this.createKeyFromRows(
      this.mother0.row2,
      this.mother1.row2,
      this.mother2.row2,
      this.mother3.row2
    )
    this.daughter3 = this.createKeyFromRows(
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
  }

  createKeyFromRows(row0, row1, row2, row3) {
    let r0 = row0 % 2
    let r1 = row1 % 2
    let r2 = row2 % 2
    let r3 = row3 % 2
    let key = (r3 << 3) + (r2 << 2) + (r1 << 1) + (r0 << 0)
    return new Tetragram(key)
  }
}
