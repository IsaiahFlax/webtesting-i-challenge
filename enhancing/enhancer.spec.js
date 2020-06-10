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
    describe('succeed()', () => {
        it('should increase enhancement by 1, max 20', () => {
            const item2 = {
                name: 'some name',
                enhancement: 18,
                durability: 99
            },
            newEnhancement = item2.enhancement + 1
            expect(enhancer.succeed(item2)).toBe(newEnhancement)
            console.log("succeed < 20:", item2)    
        })
        it('enchancement should not exceed 20', () => {
            const item3 = {
                name: 'some name',
                enhancement: 20,
                durability: 99
            }
            expect(enhancer.succeed(item3)).toBe(20)
            console.log(item3)    
        })
    })
    describe('fail()', () => {
        it('should decrease durability by 5 if enhancement < 15', () => {
            const item4 = {
                name: 'some name',
                enhancement: 14,
                durability: 99
            }
            newDurability = item4.durability - 5
            expect(enhancer.fail(item4).durability).toBe(newDurability)
            console.log("fail < 15:", item4)    
        })
        it('should decrease durability by 10 if enhancement >= 15', () => {
            const item5 = {
                name: 'some name',
                enhancement: 15,
                durability: 99
            }
            newDurability = item5.durability - 10
            expect(enhancer.fail(item5).durability).toBe(newDurability)
            console.log(item5)    
        })
        it('should decrease durability by 10 and enhancement by 1 if enhancement > 16', () => {
            const item6 = {
                name: 'some name',
                enhancement: 20,
                durability: 99
            }
            const item7 = {
                name: 'some name',
                enhancement: 19,
                durability: 89
            }
            expect(enhancer.fail(item6)).toStrictEqual(item7)
            console.log(item6)    
        })
    })
    describe('get()', () => {
        it('should return a item with the enhancement in front', () => {
            const item = {
                name: 'some name',
                enhancement: 20,
                durability: 99
            }
           expect(enhancer.get(item).name).toBe('[+20]some name')
            console.log('get:', item.name)
        })
    })
})