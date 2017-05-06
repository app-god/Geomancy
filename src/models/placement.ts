import { Tetragram } from './tetragram';
import { House } from './house';

export class Placement {
  type: PlacementType
  house: House
  tetragram: Tetragram

  constructor (house: House, key: string) {
      this.house = house
      this.tetragram = house.tetragram
      this.type = Placement.getTypeFromKey(key)
      console.log('key:', key)
      console.log('type:', this.type)
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
          return null
      }
  }

  getKey() {
      return this.house.number + '-' + this.tetragram.key
  }

  getColor(): string {
    switch (this.type) {
        case PlacementType.Warning:
        return 'danger'
        default:
        return 'dark'
    }
  }

  getTypeString(): string {
    switch (this.type) {
      case PlacementType.Warning:
        return 'Warning!'
      case PlacementType.Strongest:
        return 'Strongest'
      case PlacementType.VeryStrong:
        return 'Very Strong'
      case PlacementType.Strong:
        return 'Strong'
      case PlacementType.VeryWeak:
        return 'Very Weak'
      case PlacementType.Weakest:
        return 'Weakest'
    }
    return 'Normal'
  }

  getIcon() {
    let icon: string
    let prefix = '/assets/image/'
    switch (this.type) {
      case PlacementType.Warning:
        icon = 'skull.png'
        break
      case PlacementType.Strongest:
        icon = 'battery4.png'
        break
      case PlacementType.VeryStrong:
        icon = 'battery3.png'
        break
      case PlacementType.Strong:
        icon = 'battery2.png'
        break
      case PlacementType.VeryWeak:
        icon = 'battery1.png'
        break
      case PlacementType.Weakest:
        icon = 'battery0.png'
        break
      default:
        return null
    }
    return prefix + icon
  }
}

export enum PlacementType {
  Warning,
  Strongest,
  VeryStrong,
  Strong,
  VeryWeak,
  Weakest
}