import { Tetragram } from './tetragram';
import { House } from './house';
import { PlacementType, getTypeAsString, getTypeColor, getTypeFromKey } from "./placement.type";

export class Placement {

  type: PlacementType

  constructor (public house: House, public tetragram: Tetragram) {

    // determine type

    // is placement a warning?

    if (this.house.number == 1) {
      if (['Rubeus', 'Cauda Draconis'].indexOf(this.tetragram.name) >= 0) {
        this.setTypeIfUndefined(PlacementType.Warning)
      }
    }

    // is placement an accidental dignitary?

    let keys = ['rules', 'exalted', 'triplicity', 'detriment', 'fall']
    
    keys.forEach(key => {
      if (this.tetragram[key].indexOf(this.house.number) >= 0) {
        this.setTypeIfUndefined(getTypeFromKey(key))
      }
    })

    // if placement isn't any of the others, it's weak

    this.setTypeIfUndefined(PlacementType.Weak)

  }

  getMeaning(): string {
    return this.tetragram.getHouseMeaning(this.house.number)
  }

  getPhrase(): string {
    return this.tetragram.phrase + ' in ' + this.house.phrase + '.'
  }

  setTypeIfUndefined(type: PlacementType) {
    if (this.type === undefined) {
      this.type = type
    }
  }

  getTypeAsString(): string {
    return getTypeAsString(this.type)
  }

  getTypeColor(): string {
    return getTypeColor(this.type)
  }

  static getPlacementsForTetragram(tetragram: Tetragram) {

    let placements = House.houses.map(house => {
      return new Placement(house, tetragram)
    })

    return placements

  }
}
