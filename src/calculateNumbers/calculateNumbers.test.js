import {add, divide, multiply, subtract} from './calculateNumbers';

const assert = require('assert');

// Teste die add-Funktion
describe('add', function() {
    it('sollte zwei Zahlen korrekt addieren', function() {
        assert.equal(add(2, 3), 5);
        assert.equal(add(0, 0), 0);
        assert.equal(add(-5, 5), 0);
        assert.equal(add(1.2, 2.5), 3.7);
    });
});

// Teste die subtract-Funktion
describe('subtract', function() {
    it('sollte zwei Zahlen korrekt subtrahieren', function() {
        assert.equal(subtract(5, 2), 3);
        assert.equal(subtract(0, 0), 0);
        assert.equal(subtract(5, 5), 0);
        assert.equal(subtract(2.5, 1.2), 1.3);
    });
});

// Teste die multiply-Funktion
describe('multiply', function() {
    it('sollte zwei Zahlen korrekt multiplizieren', function() {
        assert.equal(multiply(2, 3), 6);
        assert.equal(multiply(0, 0), 0);
        assert.equal(multiply(5, 0), 0);
        assert.equal(multiply(1.2, 2.5), 3.0);
    });
});

// Teste die divide-Funktion
describe('divide', function() {
    it('sollte zwei Zahlen korrekt dividieren', function() {
        assert.equal(divide(6, 2), 3);
        assert.equal(divide(0, 5), 0);
        assert.equal(divide(5, 1), 5);
        assert.equal(divide(3.6, 1.2), 3.0);
    });

    it('sollte eine Fehlermeldung ausgeben, wenn durch Null geteilt wird', function() {
        assert.throws(() => {
            divide(10, 0);
        }, Error);
    });
});
