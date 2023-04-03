import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
    const reviews = [
        { author: 'Alice', rating: 4 },
        { author: 'Bob', rating: 5 },
        { author: 'Alice', rating: 3 },
        { author: 'Charlie', rating: 2 },
        { author: 'Alice', rating: 5 },
    ];
    const authorName = 'Alice';

    const [averageRating, setAverageRating] = useState(calculateAverageRatingByAuthor(reviews, authorName));

    function calculateAverageRatingByAuthor(reviews, authorName) {
        const filteredReviews = reviews.filter((review) => review.author === authorName);

        if (filteredReviews.length === 0) {
            return 0;
        }

        const totalRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / filteredReviews.length;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Average Service</h1>
                <p>The average rating for {authorName} is: {averageRating}</p>
            </header>
        </div>
    );
}

export default App;
