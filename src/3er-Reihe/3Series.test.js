import { getFirstNElementsOf3Series} from "./3Series";

describe('getFirstNElementsOf3Series', () => {
    test('return an empty array when n is 0', () => {
        //we work with 0 to test if we can start only with 3
        const n = 0;
        //we expected an array
        const expected = [];
        //we expected the results from getFirstNElementsOf3Series with the parameter (n)
        const result = getFirstNElementsOf3Series(n);
        expect(result).toEqual(expected);
    });

    test('return the first n elements of the 3series when n > 0', () => {
        const n = 5;
        const expected = [3, 6, 9, 12, 15];
        const result = getFirstNElementsOf3Series(n);
        expect(result).toEqual(expected);
    });

    test('throws an error when n is negativ', () => {
        //negative nr
        const n = -1;
        //expect getFirstNElementsOf3Series
        expect(() => {
            getFirstNElementsOf3Series(n);
            //
        }).toThrowError('n must be a positiv integer');
    });
});