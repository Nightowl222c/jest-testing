//Anleitung FizzBuzz:
//Für Zahlen, die durch 3 teilbar sind, wird "Fizz" ausgegeben.
//Für Zahlen, die durch 5 teilbar sind, wird "Buzz" ausgegeben.
//Für Zahlen, die sowohl durch 3 als auch durch 5 teilbar sind, wird "FizzBuzz" ausgegeben.
//Zum Beispiel wäre die Sequenz von 1 bis 15:

export function fizzBuzz(input) {
    const result = [];

    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
            console.log("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
            console.log("Buzz");
        } else {
            result.push(i.toString());
            console.log(i);
        }
    }

    return result;
}
