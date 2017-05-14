export enum PlacementType {
  Warning,
  Strongest,
  VeryStrong,
  Strong,
  Weak,
  VeryWeak,
  Weakest
}

export const getTypeAsString = (type: PlacementType) => {
  switch (type) {
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

export const getTypeColor = (type: PlacementType) => {
  switch (type) {
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

export const getTypeFromKey = (key: string) => {
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

export const getTypeAsStringFromKey = (key: string) => {
  return getTypeAsString(getTypeFromKey(key))
}
