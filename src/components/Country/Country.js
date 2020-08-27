import React from 'react';

const Country = (props) => {
    const { name, flag, region, population } = props.country
    const handleAddCountry = props.handleAddCountry
    const flagStyle = {height: '50px'}
    return (
        <div >
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt="" srcset="" />
            <h5>{region}</h5>
            <h5>{population}</h5>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;