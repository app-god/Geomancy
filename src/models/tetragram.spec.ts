import { Tetragram, TetragramInfo, tetragramInfo } from './tetragram'

describe('Tetragram', () => {

    beforeAll(() => {

    })

    it('loads tetragramInfo', () => {
        let t = new Tetragram(0)
        let ti = tetragramInfo[0]

        expect(t.key).toBe(ti.key)
        expect(t.desc).toBe(ti.desc)
        expect(t.good).toBe(ti.good)
        expect(t.houseMeanings).toBe(ti.houseMeanings)
        expect(t.planet).toBe(ti.planet)
        expect(t.dots).toBe(ti.dots)
        expect(t.sign).toBe(ti.sign)

    })

    it('adds tetragrams', () => {
        let tVia = new Tetragram(0)
        let tCaput = new Tetragram(1)
        let tLaetitia = new Tetragram(14)

        expect(tVia.add(tCaput).key).toEqual(tLaetitia.key)
    })
})
