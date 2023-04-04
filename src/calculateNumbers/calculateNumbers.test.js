import { add, divide, multiply, subtract } from './calculateNumbers';

describe('calculateNumbers', () => {
    describe('add', () => {
        it('sollte zwei Zahlen korrekt addieren', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(0, 0)).toBe(0);
            expect(add(-5, 5)).toBe(0);
            expect(add(1.2, 2.5)).toBeCloseTo(3.7);
        });
    });

    describe('subtract', () => {
        it('sollte zwei Zahlen korrekt subtrahieren', () => {
            expect(subtract(5, 2)).toBe(3);
            expect(subtract(0, 0)).toBe(0);
            expect(subtract(5, 5)).toBe(0);
            expect(subtract(2.5, 1.2)).toBeCloseTo(1.3);
        });
    });

    describe('multiply', () => {
        it('sollte zwei Zahlen korrekt multiplizieren', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(0, 0)).toBe(0);
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(1.2, 2.5)).toBeCloseTo(3.0);
        });
    });

    describe('divide', () => {
        it('sollte zwei Zahlen korrekt dividieren', () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(0, 5)).toBe(0);
            expect(divide(5, 1)).toBe(5);
            expect(divide(3.6, 1.2)).toBeCloseTo(3.0);
        });

        it('sollte eine Fehlermeldung ausgeben, wenn durch Null geteilt wird', () => {
            expect(() => {
                divide(10, 0);
            }).toThrowError(Error);
        });
    });
});
