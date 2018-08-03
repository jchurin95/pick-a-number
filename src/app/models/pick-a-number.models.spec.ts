import { PickANumber } from './pick-a-number.models';

describe('PickANumber: first game', () => {

    let instance: PickANumber;

    beforeAll(() => {
        instance = new PickANumber();
        instance.initFirstGame();
    });

    afterAll(() => {
    });
    
    describe('start', () => {
        it('should return 1 in start', () => {
            expect(instance.start).toEqual(1);
        });
        it('should return 100 in end', () => {
            expect(instance.end).toEqual(100);
        });
        it('should return 50 in current', () => {
            expect(instance.currentNumber).toEqual(50);
        });
    });

    describe('is lower', () => {
        it('should return 1 in start', () => {
            instance.isLower();
            expect(instance.start).toEqual(1);
        });
        it('should return 49 in end', () => {
            expect(instance.end).toEqual(49);
        });
        it('should return 25 in current', () => {
            expect(instance.currentNumber).toEqual(25);
        });
    });

    describe('is higher', () => {
        it('should return 26 in start', () => {
            instance.isHigher();
            expect(instance.start).toEqual(26);
        });
        it('should return 49 in end', () => {
            expect(instance.end).toEqual(49);
        });
        it('should return 37 in current', () => {
            expect(instance.currentNumber).toEqual(Math.trunc(26 + ((49 - 26) / 2)));
        });
    });

});
