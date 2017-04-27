import { Reading, ReadingData } from './reading'

let testReadingData: ReadingData
let testReading: Reading

describe('Reading', () => {

    beforeAll(() => {
        testReadingData = {
            question: '',
            topic: '',
            date: Date.now(),
            key0: 0,
            key1: 0,
            key2: 0,
            key3: 0
        }

        testReading = new Reading(testReadingData)
    })

    it('loads random reading', () => {
        let reading = new Reading(null, 'question', 'none')

        expect(reading.question).toEqual('question')
        expect(reading.topic).toEqual('none')
        expect(reading.mother0).toBeDefined()
    })

    it('calculates figures correctly', () => {
        expect(testReading.daughter0.key).toEqual(0)
        expect(testReading.daughter1.key).toEqual(0)
        expect(testReading.daughter2.key).toEqual(0)
        expect(testReading.daughter3.key).toEqual(0)

        expect(testReading.nephew0.key).toEqual(15)
        expect(testReading.nephew1.key).toEqual(15)
        expect(testReading.nephew2.key).toEqual(15)
        expect(testReading.nephew3.key).toEqual(15)

        expect(testReading.witness0.key).toEqual(15)
        expect(testReading.witness1.key).toEqual(15)

        expect(testReading.judge.key).toEqual(15)
        expect(testReading.reconciler.key).toEqual(0)
    })

    it('calculates part of fortune correctly', () => {
        // 16 + 16 + 32
        expect(testReading.partOfFortune).toEqual(4)
    })

})