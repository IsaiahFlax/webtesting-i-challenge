const enhancer = require('./enhancer.js');
// test away!
describe('item functions', () => {
    describe('repair()', () => {
        it('should return a new item with durability 100', () => {
            const item = {
                name: 'some name',
                enhancement: 20,
                durability: 99
            }
           // const repairedItem = item.durability = 100

            expect(enhancer.repair(item)).toBe(100)
            console.log('durability:', item.durability)
        })
    })
})