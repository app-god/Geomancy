import { Tetragram } from './tetragram'
import { TetragramInfo, tetragramInfo } from './tetragram.info'

describe('Tetragram', () => {

    it('loads tetragramInfo', () => {
        let t = new Tetragram(0)
        let ti = tetragramInfo[0]

        for (var key in ti) {
            expect(t[key]).toEqual(ti[key])
        }
    })

    it('adds tetragrams', () => {
        let tVia = new Tetragram(0)
        let tCaput = new Tetragram(1)
        let tAquisitio = new Tetragram(5)
        let tAmissio = new Tetragram(10)
        let tLaetitia = new Tetragram(14)
        let tPopulus = new Tetragram(15)

        expect(tVia.add(tCaput).key).toEqual(tLaetitia.key)
        expect(tVia.add(tVia).key).toEqual(tPopulus.key)
        expect(tAmissio.add(tAquisitio).key).toEqual(tVia.key)
        expect(tPopulus.add(tPopulus).key).toEqual(tPopulus.key)
    })

    it('determines reversed tetragram', () => {
        let via = new Tetragram(0)
        expect(via.reversed().name).toEqual('Via')

        let caput = new Tetragram(1)
        expect(caput.reversed().name).toEqual('Cauda Draconis')

        let amissio = new Tetragram(10)
        expect(amissio.reversed().key).toEqual(5)
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

    it('has an element', () => {
        let via = new Tetragram(0)
        expect(via.element).toEqual('Water')

        let puer = new Tetragram(4)
        expect(puer.element).toEqual('Fire')

        let caudo = new Tetragram(8)
        expect(caudo.element).toEqual('Fire')

        let fMinor = new Tetragram(12)
        expect(fMinor.element).toEqual('Fire')
    })

    it('uses getRow(n) to get the value of a row', () => {
        let via = new Tetragram(0)
        expect(via.getRow(1)).toEqual(0)
        expect(via.getRow(2)).toEqual(0)
        expect(via.getRow(3)).toEqual(0)
        expect(via.getRow(4)).toEqual(0)

        let fMinor = new Tetragram(12)
        expect(fMinor.getRow(1)).toEqual(0)
        expect(fMinor.getRow(2)).toEqual(0)
        expect(fMinor.getRow(3)).toEqual(1)
        expect(fMinor.getRow(4)).toEqual(1)
    })
})
