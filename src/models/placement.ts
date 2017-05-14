import { Tetragram } from './tetragram';
import { House } from './house';
import { PlacementType } from "./placement.type";

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
        this.setTypeIfUndefined(Placement.getTypeFromKey(key))
      }
    })

    // if placement isn't any of the others, it's weak

    this.setTypeIfUndefined(PlacementType.Weak)

  }

  getMeaning(): string {
    return this.tetragram.getHouseMeaning(this.house.number)
  }

  setTypeIfUndefined(type: PlacementType) {
    if (this.type === undefined) {
      this.type = type
    }
  }

  getTypeString(): string {
    switch (this.type) {
      case PlacementType.Warning:
        return 'Warning'
      case PlacementType.Strongest:
        return 'Extremely Strong'
      case PlacementType.VeryStrong:
        return 'Very Strong'
      case PlacementType.Strong:
        return 'Strong'
      case PlacementType.Weak:
        return 'Weak'
      case PlacementType.VeryWeak:
        return 'Very Weak'
      case PlacementType.Weakest:
        return 'Extremely Weak'
    }
  }

  getColor(): string {
    switch (this.type) {
      case PlacementType.Warning:
        return 'warning'
      case PlacementType.Strongest:
        return 'strongest'
      case PlacementType.VeryStrong:
        return 'very-strong'
      case PlacementType.Strong:
        return 'strong'
      case PlacementType.Weak:
        return 'weak'
      case PlacementType.VeryWeak:
        return 'very-weak'
      case PlacementType.Weakest:
        return 'weakest'
    }
  }

  static getPlacementsForTetragram(tetragram: Tetragram) {

    let placements = House.houses.map(house => {
      return new Placement(house, tetragram)
    })

    return placements

  }

  static getTypeFromKey(key: string) {
      switch (key) {
          case 'warning':
            return PlacementType.Warning
          case 'rules':
            return PlacementType.Strongest
          case 'exalted':
            return PlacementType.VeryStrong
          case 'triplicity':
            return PlacementType.Strong
          case 'detriment':
            return PlacementType.VeryWeak
          case 'fall':
            return PlacementType.Weakest
          default:
            return PlacementType.Weak
      }
  }
}
