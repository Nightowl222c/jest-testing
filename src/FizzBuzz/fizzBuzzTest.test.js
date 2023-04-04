import { fizzBuzz } from './fizzbuzz';

//The 1th element is the 0th element because javascript is 0 based.
test('returns "1" for the number 1', () => {
    expect(fizzBuzz()[0]).toEqual('1');
});

//The 14th element is the 15th element because javascript is 0 based.
//For numbers that are divisible by both 3 and 5, "FizzBuzz" is output.
test('returns "FizzBuzz" for the number 15', () => {
    expect(fizzBuzz()[14]).toEqual('FizzBuzz');
});

test('returns "Fizz" for the number 3', () => {
    expect(fizzBuzz()[2]).toEqual('Fizz');
});

test('returns "Buzz" for the number 5', () => {
    expect(fizzBuzz()[4]).toEqual('Buzz');
});