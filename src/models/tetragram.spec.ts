import { Tetragram } from './tetragram'
import { TetragramInfo, tetragramInfo } from './tetragram.info'

describe('Tetragram', () => {

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

    it('determines reversed tetragram', () => {
        let via = new Tetragram(0)
        expect(via.reversed().name).toEqual('Via')

        let caput = new Tetragram(1)
        expect(caput.reversed().name).toEqual('Cauda Draconis')
    })

    it('determines inversed tetragram', () => {
        let via = new Tetragram(0)
        expect(via.inversed().name).toEqual('Populus')

        let caput = new Tetragram(1)
        expect(caput.inversed().name).toEqual('Laetitia')
    })

    it('determines conversed tetragram', () => {
        let via = new Tetragram(0)
        expect(via.conversed().name).toEqual('Populus')

        let caput = new Tetragram(1)
        expect(caput.conversed().name).toEqual('Tristitia')
    })
})
