//addieren
export function add(a, b) {
    return a + b;
}


// subtrahieren
export function subtract(a, b) {
    return a - b;
}

// multiplizieren
export function multiply(a, b) {
    return a * b;
}

// dividieren
export function divide(a, b) {
    if (b === 0) {
        throw new Error('dividiert by 0error');
    }
    return a / b;
}

// variablen nutzen
let result1 = add(5, 7); // result1 ist 12
let result2 = subtract(10, 5); // result2 ist 5
let result3 = multiply(3, 4); // result3 ist 12
let result4 = divide(20, 5); // result4 ist 4

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
