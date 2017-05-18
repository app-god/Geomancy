export interface HouseInfo {
  number: number
  title: string
  description: string
  phrase: string
  sign: string
  topics: string[]
}

export const houseInfo: HouseInfo[] = [
  {
    number: 1,
    title: 'Self',
    description: '',
    phrase: 'yourself',
    sign: 'Aries',
    topics: ['Self', 'Life', 'Health', 'First Impressions']
  },
  {
    number: 2,
    title: 'Resources',
    description: '',
    phrase: 'wealth',
    sign: 'Taurus',
    topics: ['Wealth', 'Resources', 'Self-esteem', 'Survival']
  },
  {
    number: 3,
    title: 'Communication',
    description: '',
    phrase: 'perception',
    sign: 'Gemini',
    topics: ['Siblings', 'Friends', 'Short Journeys', 'Traffic']
  },
  {
    number: 4,
    title: 'Home and Family',
    description: '',
    phrase: 'your home',
    sign: 'Cancer',
    topics: ['Family', 'Inheritence', 'Home', 'Mother']
  },
  {
    number: 5,
    title: 'Pleasure and Creativity',
    description: '',
    phrase: 'creativity',
    sign: 'Leo',
    topics: ['Children', 'Romance', 'Gambling', 'Love']
  },
  {
    number: 6,
    title: 'Work and Service',
    description: '',
    phrase: 'daily work',
    sign: 'Virgo',
    topics: ['Work', 'Habits', 'Service', 'Illness']
  },
  {
    number: 7,
    title: 'Partnership',
    description: '',
    phrase: 'partnerships',
    sign: 'Libra',
    topics: ['Marriage', 'Partnerships', 'Enemies (Public)', 'Negotiation']
  },
  {
    number: 8,
    title: 'Power and the Psyche',
    description: '',
    phrase: 'power',
    sign: 'Scorpio',
    topics: ['Deaths', 'Occult Abilities', 'Sex', 'Inheritance']
  },
  {
    number: 9,
    title: 'Philosophy and Education',
    description: '',
    phrase: 'education',
    sign: 'Sagittarius',
    topics: ['Long Journeys', 'Religion', 'Education', 'Philosophy']
  },
  {
    number: 10,
    title: 'Career and Public Life',
    description: '',
    phrase: 'career',
    sign: 'Capricorn',
    topics: ['Fame', 'Business', 'Reputation', 'Father']
  },
  {
    number: 11,
    title: 'the World',
    description: '',
    phrase: 'the world',
    sign: 'Aquarius',
    topics: ['Society', 'Hopes', 'Humanity', 'Social Media']
  },
  {
    number: 12,
    title: 'Spirituality',
    description: '',
    phrase: 'spirituality',
    sign: 'Pisces',
    topics: ['Spirituality', 'Sacrifice', 'Enemies (Secret)', 'The Unknown']
  }
]
