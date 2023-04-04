import React, { useState } from 'react';
import { fizzBuzz } from './FizzBuzz/fizzBuzz';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = () => {
        const fizzBuzzResult = fizzBuzz(Number(input));
        setResult(fizzBuzzResult);
    };

    return (
        <div className="fizzbuzz-container">
            <div>
                <label htmlFor="input">Geben Sie eine Zahl ein:</label>
                <div>
                    <input type="number" id="input" value={input} onChange={handleChange} />
                    <button onClick={handleSubmit}>FizzBuzz</button>
                </div>
            </div>
                <ul className="fizzbuzz-list">
                    {result.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
    );
}

export default App;
