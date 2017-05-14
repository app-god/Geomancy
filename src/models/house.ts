import { Tetragram } from './tetragram'
import { Placement } from "./placement"
import { HouseInfo, houseInfo } from './house.info'

export class House {

  title: string
  description: string

  sign: string
  topics: string[]
  phrase: string

  constructor(public number: number) {

    let info: HouseInfo = houseInfo.find(
      i => { return i.number === number }
    )

    this.title =       info.title
    this.description = info.description
    this.topics =      info.topics.sort()
    this.phrase =      info.phrase
    this.sign =        info.sign

  }

  static numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  static houses: House[] = House.numbers.map(number => { return new House(number) })

}
