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
})
