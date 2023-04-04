import { fizzBuzz } from './fizzbuzz';
import {fireEvent, render} from "@testing-library/react";
import App from "../App";


// //The 1th element is the 0th element because javascript is 0 based.
// test('returns "1" for the number 1', () => {
//     expect(fizzBuzz()[0]).toEqual('1');
// });
//
// //The 14th element is the 15th element because javascript is 0 based.
// //For numbers that are divisible by both 3 and 5, "FizzBuzz" is output.
// test('returns "FizzBuzz" for the number 15', () => {
//     expect(fizzBuzz()[14]).toEqual('FizzBuzz');
// });
//
// test('returns "Fizz" for the number 3', () => {
//     expect(fizzBuzz()[2]).toEqual('Fizz');
// });
//
// test('returns "Buzz" for the number 5', () => {
//     expect(fizzBuzz()[4]).toEqual('Buzz');
// });

test('handleChange function updates the input field value', () => {
    //render the component App
    const {getByLabelText, getByText} = render (<App />);
    //use the input filed with the text: 'Geben Sie eine Zahl ein
    const input = getByLabelText('Geben Sie eine Zahl ein:');
    //use the button with Text 'FizzBuzz'
    const button = getByText('FizzBuzz');
    //use fireEvent.change() for fill in value 15 in input fiel. Simulate a change-event
    fireEvent.change(input, {target: {value: '42'}});
    expect(input.value).toBe('42');
})
