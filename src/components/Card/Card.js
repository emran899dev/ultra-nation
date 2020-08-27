import React from 'react';

const Card = (props) => {
    const card = props.card
    // let totalPopulation = 0
    // for (let i = 0; i < card.length; i++) {
    //     const country = card[i];
    //     totalPopulation += country.population
    // }

    const totalPopulation = card.reduce((sum, country) => sum + country.population, 0)
    
    return (
        <div>
            <h2>This is card: {card.length}</h2>
            <h3>Total population: {totalPopulation}</h3>
        </div>
    );
};

export default Card;